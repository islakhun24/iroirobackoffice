/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { HELP_CENTER_CREATE, HELP_CENTER_DELETE, HELP_CENTER_LIST, HELP_CENTER_UPDATE } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { gets, posts, deletes, puts } from '../helpers/api';

const help_center_create = (type, question, answer) => {
    const body = { type, question, answer };
    return posts(`${HELP_CENTER_CREATE}`, body).then((response) => handleresponse(response));
};
const help_center_update = (question, answer, id) => {
    const body = { question, answer };
    return puts(`${HELP_CENTER_UPDATE}?id=${id}`, body).then((response) => handleresponse(response));
};
const help_center_delete = (id) => deletes(`${HELP_CENTER_DELETE}?id=${id}`).then((response) => handleresponse(response));
const help_center_list = (type) => gets(`${HELP_CENTER_LIST}?type=${type}`).then((response) => handleresponse(response));
export default {
    help_center_create,
    help_center_delete,
    help_center_update,
    help_center_list
};
