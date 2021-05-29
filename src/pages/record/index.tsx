import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtTabBar } from "taro-ui"
import './index.less'
import { getDepartmentList } from '../../services/test';
import register from '../../assets/register.png'
import recordActive from '../../assets/recordActive.png'

const Record: React.FC = () => {
  const [datas, setDatas] = useState([{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }])
  useEffect(() => {
    const loadData = async () => {
      const res = await getDepartmentList();
      console.log(res.data.record);
    };
    void loadData();
  }, []);
  useEffect(() => {
    console.log('1234', Taro.getCurrentInstance().router)
  }, [])
  return (
    <View className='record-wrap'>
      {datas.map((item) => {
        return (
          <View className='record'>
            <View className='at-row'>
              <View className='at-col at-col-9'>
                <div className="record-label">问问</div>
                <div className="record-date">2021-05-24 12:00</div>
              </View>
              <View className='at-col at-col-3'>
                <div className="record-number">8号</div>
              </View>
            </View>
            <View className='at-row first-row-wrap'>
              <View className='at-col at-col-3'>
                <div className="record-label">嘻嘻：</div>
              </View>
              <View className='at-col at-col-9'>
                <div className="record-detail">嘻嘻嘻嘻嘻嘻</div>
              </View>
            </View>
            <View className='at-row row-wrap'>
              <View className='at-col at-col-3'>
                <div className="record-label">一样：</div>
              </View>
              <View className='at-col at-col-9'>
                <div className="record-detail">哈哈哈哈哈哈</div>
              </View>
            </View>
            <View className='at-row row-wrap'>
              <View className='at-col at-col-3'>
                <div className="record-label">xx</div>
              </View>
              <View className='at-col at-col-9'>
                <div className="record-detail">王王王</div>
              </View>
            </View>
            <View className='at-row row-wrap'>
              <View className='at-col at-col-3'>
                <div className="record-label">超长</div>
              </View>
              <View className='at-col at-col-9'>
                <div className="record-detail">李丽丽</div>
              </View>
            </View>
            <View className='at-row creat-time row-wrap'>
              <View className='at-col at-col-3'>
                <div className="record-label">创建时间：</div>
              </View>
              <View className='at-col at-col-9'>
                <div className="record-label">2021-05-30  15：30</div>
              </View>
            </View>
          </View>)
      })
      }
      <AtTabBar
        fixed={true}
        tabList={[
          { title: 'xxx', image: register},
          { title: 'yyy', image: recordActive ,  dot: true},
        ]}
        onClick={(current)=>{
          if(current===0){
            Taro.navigateTo({
              url: `/pages/register/index`
            })
          }
        }}
        current={1}
      />
    </View>
  )
}
export default Record;