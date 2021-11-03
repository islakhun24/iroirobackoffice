/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { BANNER_CREATE, BANNER_DELETE } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts, deletes } from '../helpers/api';

const banner_create = (condition_name, code) =>
    posts(`${BANNER_CREATE}`, {
        condition_name,
        code
    }).then((response) => handleresponse(response));

const banner_delete = (id) => deletes(`${BANNER_DELETE}/${id}`).then((response) => handleresponse(response));

export default {
    banner_create,
    banner_delete
};
