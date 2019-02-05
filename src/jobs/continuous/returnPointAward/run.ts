/**
 * Pecorinoインセンティブ返却
 */
import * as sskts from '@motionpicture/sskts-domain';
import * as createDebug from 'debug';
import * as mongoose from 'mongoose';

import mongooseConnectionOptions from '../../../mongooseConnectionOptions';

const debug = createDebug('sskts-jobs:*');

mongoose.connect(<string>process.env.MONGOLAB_URI, mongooseConnectionOptions)
    .then(debug)
    // tslint:disable-next-line:no-console
    .catch(console.error);

let count = 0;

const MAX_NUBMER_OF_PARALLEL_TASKS = 10;
const INTERVAL_MILLISECONDS = 200;
const taskRepo = new sskts.repository.Task(mongoose.connection);

const authClient = new sskts.pecorinoapi.auth.ClientCredentials({
    domain: <string>process.env.PECORINO_AUTHORIZE_SERVER_DOMAIN,
    clientId: <string>process.env.PECORINO_API_CLIENT_ID,
    clientSecret: <string>process.env.PECORINO_API_CLIENT_SECRET,
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
                sskts.factory.taskName.ReturnPointAward
            )({
                taskRepo: taskRepo,
                connection: mongoose.connection,
                pecorinoAuthClient: authClient
            });
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.error(error);
        }

        count -= 1;
    },
    INTERVAL_MILLISECONDS
);
