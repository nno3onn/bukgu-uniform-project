const SERVER_PATH = "http://172.30.1.34:3001";
const API_PATH = `${SERVER_PATH}/api`;

const ADMIN_PATH = `${API_PATH}/admin`;
const ADMIN_SIGN_IN = `${ADMIN_PATH}/signin`;
const ADMIN_VERIFY = `${ADMIN_PATH}/verifyToken`;

const INFO_PATH = `${API_PATH}/info`;

const USER_PATH = `${API_PATH}/user`;
const USER_LOGS_UNIFORM_DONATE = `${USER_PATH}/logs/uniform/donate`;

const UNIFORM_PATH = `${API_PATH}/uniform`;
const UNIFORM_LIST = `${UNIFORM_PATH}/list`;
const UNIFORM_CONFIRM_DONATE = `${UNIFORM_PATH}/confirm/donate`;
const UNIFORM_CONFIRM_PURCHASE = `${UNIFORM_PATH}/confirm/purchase`;
const UNIFORM_CONFIRM_DELIVERY = `${UNIFORM_PATH}/confirm/delivery`;
const UNIFORM_REJECT_PURCHASE = `${UNIFORM_PATH}/reject/purchase`;
const UNIFORM_SEARCH_RECORD = `${UNIFORM_PATH}/searchRecord`;

export default {
  SERVER_PATH,
  API_PATH,
  INFO_PATH,
  USER_PATH,
  UNIFORM_PATH,
  ADMIN_PATH,
  ADMIN_SIGN_IN,
  ADMIN_VERIFY,
  UNIFORM_LIST,
  UNIFORM_CONFIRM_DONATE,
  UNIFORM_CONFIRM_PURCHASE,
  USER_LOGS_UNIFORM_DONATE,
  UNIFORM_SEARCH_RECORD,
  UNIFORM_CONFIRM_DELIVERY,
  UNIFORM_REJECT_PURCHASE,
};
