/**
 * Created by Anahid on 27/05/2017.
 */
exports.GENERAL_ERROR = {code: -110, message: 'خطا در انجام عملیات'};

exports.DB_ERROR = {code: -400, message: 'خطای بانک اطلاعاتی'};

exports.SUCCESS = {code: 0, message: 'عملیات با موفقیت انجام شد'};

exports.SUCCESS_INSERT = {code: 0, message: 'عملیات با موفقیت انجام شد', objectId: ""};

exports.BAD_BODY_ERROR = {code: -200, message: 'مقادیر ارسالی صحیح نمی باشد'};

exports.ERRROR_ON_SEARCH = {code: -301, message: 'عملیات جستجو با خطا مواجه شد'};

exports.PERSON_ALREADY_EXIST = {code: -101, message: 'چنین شخصی قبلا وارد شده است'};

exports.DB_ERROR_EMPTY = {code: -401, message: 'هیچ موردی یافت نشد'};

exports.MODEL_ALREADY_EXIST = {code: -404, message: 'چنین مدلی قبلا وارد شده است'};

exports.USER_ALREADY_EXIST = {code: -404, message: 'چنین کاربری قبلا وارد شده است'};

exports.MAIN_API_URL = '/api-v.1';

