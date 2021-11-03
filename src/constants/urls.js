const BASE_URL = "https://iroro-station.herokuapp.com/api";

//CATEGORY
export const CATEGORY_CREATE = `${BASE_URL}/main/categori/create`;
export const CATEGORY_LIST = `${BASE_URL}/main/categori/list`;
export const CATEGORY_DELETE = `${BASE_URL}/main/categori/delete`;

//CONDITION
export const CONDITION_CREATE = `${BASE_URL}/main/condition/create`;
export const CONDITION_LIST = `${BASE_URL}/main/condition/list`;
export const CONDITION_DELETE = `${BASE_URL}/main/condition/delete`;

//REPORT
export const REPORT_LIST = `${BASE_URL}/main/report/list`;

//BANNER
export const BANNER_CREATE = `${BASE_URL}/main/banner/post`;
export const BANNER_DELETE = `${BASE_URL}/main/banner/delete`;

//AUTH
export const REGISTER_BO = `${BASE_URL}/bo/auth/registerinput`;
export const REGISTER_BO_STAFF = `${BASE_URL}/bo/auth/registerstaff`;
export const DEPARTEMENET_CREATE = `${BASE_URL}/bo/auth/create/departement`;
export const DEPARTEMENT_LIST = `${BASE_URL}/list/departement`;
export const STAFF_UPDATE = `${BASE_URL}/bo/auth/updatestaff`;
export const PHOTO_PROFILE = `${BASE_URL}/bo/auth/updatephotoprofile`;
export const STAFF_DELETE = `${BASE_URL}/bo/auth/delete_staff`;
export const STAFF_LIST = `${BASE_URL}/bo/auth/liststaff`;
export const CHANGE_PASSWORD = `${BASE_URL}/bo/auth/changepassword`;
export const LOGIN_BO = `${BASE_URL}/bo/auth/login`;

//FOOTER
export const UPSERT_FOOTER = `${BASE_URL}/bo/footer/create/update`;

//BLOG
export const BLOG_CREATE = `${BASE_URL}/bo/blog/create`;

//LISTING_SETTINGS
export const LISTING_SETTINGS = `${BASE_URL}/bo/listing/setting/create/update`;

//PRICE_SETTINGS
export const UPSERT_HURRY_REQUEST = `${BASE_URL}/bo/price/listing/create/update/hurry_request`;
export const UPSERT_REQUEST = `${BASE_URL}/bo/price/listing/create/update/request`;
export const UPSERT_ASSIST_REQUEST = `${BASE_URL}/bo/price/listing/create/update/assist_request`;
export const UPSERT_TRIP = `${BASE_URL}/bo/price/listing/create/update/trip`;
export const UPSERT_RECOMENDATION = `${BASE_URL}/bo/price/listing/create/update/recomendation`;
export const UPSERT_AUCTION = `${BASE_URL}/bo/price/listing/create/update/auction`;
export const UPSERT_PAYMENT = `${BASE_URL}/bo/price/listing/create/update/next_payment`;
export const UPSERT_REFUND = `${BASE_URL}/bo/price/listing/create/update/refund`;
export const UPSERT_CREATE_BILL = `${BASE_URL}/bo/price/listing/create/update/create_bill`;

//APPLICATION
export const LISENCE_PERMISSION = `${BASE_URL}/bo/izin/lisensi/create/update`;

//HELP_CENTER
export const HELP_CENTER_CREATE = `${BASE_URL}/bo/help/center/create`;
export const HELP_CENTER_UPDATE = `${BASE_URL}/bo/help/center/update`;
export const HELP_CENTER_DELETE = `${BASE_URL}/bo/help/center/delete`;
export const HELP_CENTER_LIST = `${BASE_URL}/bo/help/center/list`;

//SECURITY
export const SUBMISSION_ID_LIST = `${BASE_URL}/auth/submission/id/list`;
export const SUBMISSION_ID_DETAIL = `${BASE_URL}/auth/submission/id/detail`;
export const SUBMISSION_ID_IMAGE_FRONT = `${BASE_URL}/auth/submission/id/image/front`;
export const SUBMISSION_ID_IMAGE_BACK = `${BASE_URL}/auth/submission/id/image/back`;
export const SUBMISSION_ID_ACTION = `${BASE_URL}/auth/submission/id/action`;
export const SUBMISSION_ID_ARCHIVE = `${BASE_URL}/auth/submission/id/archive`;
