"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 会員プログラム登録タスク
 */
const sskts = require("@motionpicture/sskts-domain");
const createDebug = require("debug");
const mongooseConnectionOptions_1 = require("../../../mongooseConnectionOptions");
const debug = createDebug('sskts-jobs:*');
sskts.mongoose.connect(process.env.MONGOLAB_URI, mongooseConnectionOptions_1.default)
    .then(debug)
    // tslint:disable-next-line:no-console
    .catch(console.error);
const redisClient = sskts.redis.createClient({
    host: process.env.REDIS_HOST,
    // tslint:disable-next-line:no-magic-numbers
    port: parseInt(process.env.REDIS_PORT, 10),
    password: process.env.REDIS_KEY,
    tls: { servername: process.env.REDIS_HOST }
});
const pecorinoAuthClient = new sskts.pecorinoapi.auth.ClientCredentials({
    domain: process.env.PECORINO_AUTHORIZE_SERVER_DOMAIN,
    clientId: process.env.PECORINO_API_CLIENT_ID,
    clientSecret: process.env.PECORINO_API_CLIENT_SECRET,
    scopes: [],
    state: ''
});
// pecorino転送取引サービスクライアントを生成
const depositService = new sskts.pecorinoapi.service.transaction.Deposit({
    endpoint: process.env.PECORINO_API_ENDPOINT,
    auth: pecorinoAuthClient
});
let count = 0;
const MAX_NUBMER_OF_PARALLEL_TASKS = 10;
const INTERVAL_MILLISECONDS = 200;
const taskRepo = new sskts.repository.Task(sskts.mongoose.connection);
const cognitoIdentityServiceProvider = new sskts.AWS.CognitoIdentityServiceProvider({
    apiVersion: 'latest',
    region: 'ap-northeast-1',
    credentials: new sskts.AWS.Credentials({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
});
setInterval(() => __awaiter(this, void 0, void 0, function* () {
    if (count > MAX_NUBMER_OF_PARALLEL_TASKS) {
        return;
    }
    count += 1;
    try {
        yield sskts.service.task.executeByName(sskts.factory.taskName.RegisterProgramMembership)({
            taskRepo: taskRepo,
            connection: sskts.mongoose.connection,
            redisClient: redisClient,
            cognitoIdentityServiceProvider: cognitoIdentityServiceProvider,
            depositService: depositService
        });
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.error(error);
    }
    count -= 1;
}), INTERVAL_MILLISECONDS);
