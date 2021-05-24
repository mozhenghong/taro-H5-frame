/**
 * 后端返回异常 code 枚举
 * LOGIN_EXCEPTION(4000, "登录失败"),
 * SYSTEM_EXCEPTION(5000, "系统异常"),
 * PARAMETER_EXCEPTION(5001, "请求参数校验异常"),
 * PARAMETER_PARSE_EXCEPTION(5002, "请求参数解析异常"),
 * HTTP_MEDIA_TYPE_EXCEPTION(5003, "HTTP内容类型异常"),
 * SPRING_BOOT_PLUS_EXCEPTION(5100, "系统处理异常"),
 * BUSINESS_EXCEPTION(5101, "业务处理异常"),
 * DAO_EXCEPTION(5102, "数据库处理异常"),
 * VERIFICATION_CODE_EXCEPTION(5103, "验证码校验异常"),
 * AUTHENTICATION_EXCEPTION(5104, "登录授权异常"),
 * UNAUTHENTICATED_EXCEPTION(5105, "没有访问权限"),
 * UNAUTHORIZED_EXCEPTION(5106, "没有访问权限"),
 * JWTDECODE_EXCEPTION(5107, "Token解析异常"),
 */

import Taro from '@tarojs/taro';

interface ParamsData {
  [propsName: string]: any;
}

interface ContentType {
  JSON: 'application/json';
  FORM: 'application/x-www-form-urlencoded';
}

interface ParamsHeader {
  'content-type'?: ContentType;
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

interface Params {
  url: string;
  method: HttpMethod;
  data?: ParamsData;
  header?: ParamsHeader;
}

enum StatusCode {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  NotAcceptable = 406,
  Gone = 410,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504
}

const statusCodeMessage: { [propsName in StatusCode]: string } = {
  200: '操作成功',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '非法访问',
  403: '没有权限',
  404: '请求资源不存在',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  500: '操作失败',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

interface Response {
  header: Record<string, any>;
  statusCode: StatusCode;
  errMsg: string;
  data: {
    code: number;
    success: boolean;
    message: string;
    time: string;
    data: any;
  };
}

const errorHandle = (response: Response) => {
  const statusCodeErrorMessage = statusCodeMessage[response.statusCode];
  if (response.statusCode === StatusCode.Unauthorized) {
    void Taro.showToast({ title: '请登录', duration: 1500, icon: 'none' });
  } else {
    void Taro.showToast({
      title: statusCodeErrorMessage || response.data.message,
      duration: 1000,
      icon: 'none'
    });
  }
  throw new Error(
    `返回状态码为 ${response.statusCode}，后端返回 code 为 ${
      response.data.code
    }，${statusCodeErrorMessage || response.data.message}`
  );
};

const request = async (params: Params) => {
  const { url, ...rest } = params;
  const response: Response = await Taro.request({
    // url: `${BASE_URL}${BASE_PREFIX}${url}`,
    url: `api/${url}`,
    ...rest
  });
  if (response.statusCode !== 200 || response.data.code !== 0) {
    errorHandle(response);
    return null;
  }
  return response.data;
};

export default request;
