/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { BLOG_CREATE } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts } from '../helpers/api';

const create_blog = (title, date, article, tags, category, source, file) => {
    const body = { title, date, article, tags, category, source, file };
    return posts(`${BLOG_CREATE}`, body).then((response) => handleresponse(response));
};

export default {
    create_blog
};
