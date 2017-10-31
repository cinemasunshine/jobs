/**
 * 上映イベントインポート
 * @ignore
 */

import * as sskts from '@motionpicture/sskts-domain';
import * as createDebug from 'debug';
import * as moment from 'moment';

import mongooseConnectionOptions from '../../../mongooseConnectionOptions';

const debug = createDebug('sskts-jobs:*');

/**
 * 上映イベントを何週間後までインポートするか
 * @const {number}
 */
const LENGTH_IMPORT_SCREENING_EVENTS_IN_WEEKS = (process.env.LENGTH_IMPORT_SCREENING_EVENTS_IN_WEEKS !== undefined)
    // tslint:disable-next-line:no-magic-numbers
    ? parseInt(<string>process.env.LENGTH_IMPORT_SCREENING_EVENTS_IN_WEEKS, 4)
    : 1;

async function main() {
    debug('connecting mongodb...');
    sskts.mongoose.connect(<string>process.env.MONGOLAB_URI, mongooseConnectionOptions);

    const eventRepository = new sskts.repository.Event(sskts.mongoose.connection);
    const placeRepository = new sskts.repository.Place(sskts.mongoose.connection);
    const organizationRepository = new sskts.repository.Organization(sskts.mongoose.connection);

    // 全劇場組織を取得
    const movieTheaters = await organizationRepository.searchMovieTheaters({});

    await Promise.all(movieTheaters.map(async (movieTheater) => {
        try {
            debug('importing screening events...');
            await sskts.service.masterSync.importScreeningEvents(
                movieTheater.location.branchCode,
                moment().toDate(),
                moment().add(LENGTH_IMPORT_SCREENING_EVENTS_IN_WEEKS, 'weeks').toDate()
            )(eventRepository, placeRepository);
            debug('screening events imported.');
        } catch (error) {
            console.error(error);
        }
    }));

    sskts.mongoose.disconnect();
}

main().then(() => {
    debug('success!');
}).catch((err) => {
    console.error(err);
    process.exit(1);
});