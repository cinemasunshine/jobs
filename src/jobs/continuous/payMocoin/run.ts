/**
 * Mocoin支払取引実行
 * @ignore
 */

import * as sskts from '@motionpicture/sskts-domain';
import * as createDebug from 'debug';

import mongooseConnectionOptions from '../../../mongooseConnectionOptions';

const debug = createDebug('sskts-jobs:*');

sskts.mongoose.connect(<string>process.env.MONGOLAB_URI, mongooseConnectionOptions).then(debug).catch(console.error);

let count = 0;

const MAX_NUBMER_OF_PARALLEL_TASKS = 10;
const INTERVAL_MILLISECONDS = 1000;
const taskRepo = new sskts.repository.Task(sskts.mongoose.connection);

const authClient = new sskts.mocoin.auth.ClientCredentials({
    domain: <string>process.env.MOCOIN_AUTHORIZE_SERVER_DOMAIN,
    clientId: <string>process.env.MOCOIN_CLIENT_ID,
    clientSecret: <string>process.env.MOCOIN_CLIENT_SECRET,
    scopes: [],
    state: ''
});

setInterval(
    async () => {
        if (count > MAX_NUBMER_OF_PARALLEL_TASKS) {
            return;
        }

        count += 1;

        try {
            await sskts.service.task.executeByName(
                sskts.factory.taskName.PayMocoin
            )({
                taskRepo: taskRepo,
                connection: sskts.mongoose.connection,
                mocoinAuthClient: authClient
            });
        } catch (error) {
            console.error(error);
        }

        count -= 1;
    },
    INTERVAL_MILLISECONDS
);