import React, { useState, useEffect } from 'react'
import { View, Text, Picker, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent,AtTabBar} from "taro-ui"

import './index.less'
import moment from 'moment'

const Register: React.FC = () => {
  const [timeSel, setTimeSel] = useState([])
  const [time, setTime] = useState('')
  const [dateSel, setDateSel] = useState(moment().format('YYYY-MM-DD'))
  const [department, setDepartment] = useState('全部')
  const [datas, setDatas] = useState([{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }])
  const [isOpened, setIsOpened] = useState(false)
  const [departmentList, setDepartmentList] = useState(['全部', '美国', '中国', '巴西', '日本'])
  const timeArr = [['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],['00','15','30','45']]
  useEffect(() => {

    return () => {
    }
  }, [])
  const onTimeChange = e => {
    setTimeSel(e.detail.value)
    setTime(`${timeArr[0][e.detail.value[0]]} : ${timeArr[1][e.detail.value[1]]}`)
  }
  const onDepartmentChange = e => {
    setDepartment(departmentList[e.detail.value])
  }
  return (
    <View className='register-wrap'>
      <View className='at-row time-wrap'>
        <View className='at-col at-col-5'>
          <Text className="label">预约日期</Text>
          <View className="date-wrap">
            <View className="date-content">{dateSel ? dateSel : '请选择日期'}</View>
          </View>
        </View>
        <View className='at-col at-col-2'>
        </View>
        <View className='at-col at-col-5'>
          <Text className="label">
            预约时间
            <span className="isNeed">(必选)</span>
          </Text>
          <View className="date-wrap">
            <Picker 
              mode='multiSelector' 
              range={timeArr} 
              onChange={onTimeChange}
              value={timeSel}
            >
              <View className="time-content">
                {time? time : '请选择时间'}
                <img src={require('../../assets/timeIcon.png')} alt="" />
              </View>
            </Picker>
          </View>
        </View>
      </View>
      <View className="department-wrap">
        <Picker 
          mode='selector' 
          range={departmentList} 
          onChange={onDepartmentChange} 
          disabled={!time}
        >
          <View>
            科室:
            <span className="department">
              {department}
            </span>
            <img src={require('../../assets/select.png')} alt="" />
          </View>
        </Picker>
      </View>
      <View className="doctor-list-wrap">
        {datas.map((item) => {
          return (
            <View className='at-row row-wrap'>
              <View className='at-col at-col-5 doctor-name'>
                <img src={require('../../assets/avator.png')} />
                <span className="name">啦啦啦啦啦啦啦啦啦啦</span>
              </View>
              <View className='at-col at-col-4 wait-people'>
                <img src={require('../../assets/waitIcon.png')} />
                等待中20人
              </View>
              <View className='at-col at-col-3 order-action'>
                <img src={require('../../assets/order.png')} className="order-img" onClick={() => {
                  Taro.navigateTo({
                    url: `/pages/confirm/index?id=${item.id}`
                  })
                  // setIsOpened(true)
                }} />
              </View>
            </View>
          )
        })}
      </View>
      <AtModal
        isOpened={isOpened}
        onClose={() => {
          setIsOpened(false)
        }}
      >
        <AtModalHeader>提示</AtModalHeader>
        <AtModalContent>
          <div className="register-message-content">
            您今天存在多个预约，不能进行线上挂号，请您移步至前台，通过人工进行挂号
          </div>
          <div className="register-message-confirm" onClick={() => {
            setIsOpened(false)
          }}>确定</div>
        </AtModalContent>
      </AtModal>
      <AtTabBar
        fixed={true}
        tabList={[
          { title: 'xxx', image: require('../../assets/registerActive.png')},
          { title: 'yyy', image: require('../../assets/record.png') ,  dot: true},
        ]}
        onClick={(current)=>{
          if(current===1){
            Taro.navigateTo({
              url: `/pages/record/index`
            })
          }
        }}
        current={0}
      />
    </View>
  )
}
export default Register;
