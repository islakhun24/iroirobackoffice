/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { UPSERT_FOOTER } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts } from '../helpers/api';

const upsert_footer = (type, title, link, show_media, article, file) => {
    const body = { type, title, link, show_media, article, file };
    return posts(`${UPSERT_FOOTER}`, body).then((response) => handleresponse(response));
};

export default {
    upsert_footer
};
