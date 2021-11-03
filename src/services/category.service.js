/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { CATEGORY_CREATE, CATEGORY_DELETE, CATEGORY_LIST } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts, gets, deletes } from '../helpers/api';

const category_create = (category_name, code) =>
    posts(`${CATEGORY_CREATE}`, {
        category_name,
        code
    }).then((response) => handleresponse(response));

const category_delete = (id) => deletes(`${CATEGORY_DELETE}/${id}`).then((response) => handleresponse(response));
const category_list = () => gets(`${CATEGORY_LIST}`).then((response) => handleresponse(response));

export default {
    category_create,
    category_delete,
    category_list
};
