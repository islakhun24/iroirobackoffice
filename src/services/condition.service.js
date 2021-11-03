/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { CONDITION_CREATE, CONDITION_LIST, CONDITION_DELETE } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts, gets, deletes } from '../helpers/api';

const condition_create = (condition_name, code) =>
    posts(`${CONDITION_CREATE}`, {
        condition_name,
        code
    }).then((response) => handleresponse(response));

const condition_delete = (id) => deletes(`${CONDITION_DELETE}/${id}`).then((response) => handleresponse(response));
const condition_list = () => gets(`${CONDITION_LIST}`).then((response) => handleresponse(response));

export default {
    condition_create,
    condition_delete,
    condition_list
};
