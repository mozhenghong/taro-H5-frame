import React, { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro';

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import { getDepartmentList } from '../../services/test';
const Test: React.FC = () => {
    useEffect(() => {
        const loadData = async () => {
          const res = await getDepartmentList();
          console.log(res.data.record);
        };
        void loadData();
      }, []);
      useEffect(()=>{
        console.log('1234',Taro.getCurrentInstance().router)
      },[])
    return (
        <View className='test'>
        <Text >测试一下</Text>
      </View>
    )
}
export default Test;