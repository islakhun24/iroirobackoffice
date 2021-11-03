/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { LISTING_SETTINGS } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts } from '../helpers/api';

const upsert_listing_settings = (
    type,
    duration_no_plan,
    duration_respon_hurry_request_day,
    duration_respon_hurry_request_hours,
    duration_respon_request_day,
    duration_respon_request_hours,
    limit_number_of_trip_banner,
    post_listing_duration_recomendation,
    manual_payment_deadline_auction_day,
    manual_payment_deadline_auction_hours
) => {
    const body = {
        type,
        duration_no_plan,
        duration_respon_hurry_request_day,
        duration_respon_hurry_request_hours,
        duration_respon_request_day,
        duration_respon_request_hours,
        limit_number_of_trip_banner,
        post_listing_duration_recomendation,
        manual_payment_deadline_auction_day,
        manual_payment_deadline_auction_hours
    };
    return posts(`${LISTING_SETTINGS}`, body).then((response) => handleresponse(response));
};

export default {
    upsert_listing_settings
};
