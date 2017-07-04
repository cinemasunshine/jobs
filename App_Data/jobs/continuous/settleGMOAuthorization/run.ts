/**
 * GMO実売上
 *
 * @ignore
 */

import * as sskts from '@motionpicture/sskts-domain';
import * as createDebug from 'debug';
import * as mongoose from 'mongoose';

import mongooseConnectionOptions from '../../../../mongooseConnectionOptions';

const debug = createDebug('sskts-jobs:bin:watchSettleGMOAuthorizationQueue');

(<any>mongoose).Promise = global.Promise;
mongoose.connect(<string>process.env.MONGOLAB_URI, mongooseConnectionOptions);

let count = 0;

const MAX_NUBMER_OF_PARALLEL_TASKS = 10;
const INTERVAL_MILLISECONDS = 1000;
const taskAdapter = sskts.adapter.task(mongoose.connection);

setInterval(
    async () => {
        if (count > MAX_NUBMER_OF_PARALLEL_TASKS) {
            return;
        }

        count += 1;

        try {
            debug('count:', count);
            await sskts.service.task.executeByName(
                sskts.factory.taskName.SettleGMOAuthorization
            )(taskAdapter, mongoose.connection);
        } catch (error) {
            console.error(error.message);
        }

        count -= 1;
    },
    INTERVAL_MILLISECONDS
);
