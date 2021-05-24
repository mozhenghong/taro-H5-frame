import request, { HttpMethod } from '../utils/request';

export interface TestParams {
  id: number;
  name: string;
  orderNo: string;
  remark: string;
  state: 0 | 1;
  version: number;
  createTime: string;
  updateTime: string;
}
/**
 * 测试
 * @param id 主键
 * @param name 订单名称
 * @param orderNo 订单编号
 * @param remark 备注
 * @param state 状态，0：禁用，1：启用
 * @param version 版本
 * @param createTime 创建时间
 * @param updateTime 修改时间
 */
export async function test({
  id,
  name,
  orderNo,
  remark,
  state,
  version,
  createTime,
  updateTime
}: TestParams) {
  return request({
    url: '/exampleOrder/add',
    method: HttpMethod.POST,
    data: { id, name, orderNo, remark, state, version, createTime, updateTime }
  });
}

export async function getDepartmentList() {
  return request({
    url: 'common/config/department/list',
    method: HttpMethod.GET,
    data: {clinicId:1}
  });
}
