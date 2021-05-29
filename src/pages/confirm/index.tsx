import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtModal, AtModalHeader, AtModalContent} from "taro-ui"
import './index.less'


const Confirm: React.FC = () => {
  const [datas, setDatas] = useState([{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }])
  const [isOpened, setIsOpened] = useState(false)

  return (
    <View className='confirm-wrap'>
      <View className='register-detail-wrap'>
        <View className='doctor-avator'>
          <img src={require('../../assets/avator.png')} alt="" />
          我叫啥
        </View>
        <View className='clinic-wrap'>
          <View className='at-row row-wrap'>
            <View className='at-col at-col-3'>
              <div className="confirm-label">xx：</div>
            </View>
            <View className='at-col at-col-9'>
              <div className="confirm-detail">耶耶耶耶耶耶耶耶耶</div>
            </View>
          </View>
          <View className='at-row row-wrap'>
            <View className='at-col at-col-3'>
              <div className="confirm-label">yy：</div>
            </View>
            <View className='at-col at-col-9'>
              <div className="confirm-detail">耶耶耶耶耶耶耶晕</div>
            </View>
          </View>
          <View className='at-row row-wrap'>
            <View className='at-col at-col-3'>
              <div className="confirm-label">嘻嘻嘻：</div>
            </View>
            <View className='at-col at-col-9'>
              <div className="confirm-detail">2021-05-28 10:58</div>
            </View>
          </View>
        </View>
        <View className='patient-wrap'>
          <View className='at-row row-wrap'>
            <View className='at-col at-col-3'>
              <div className="confirm-label">啦啦啦：</div>
            </View>
            <View className='at-col at-col-9'>
              <div className="confirm-detail">耶耶耶耶耶耶耶</div>
            </View>
          </View>
          <View className='at-row row-wrap'>
            <View className='at-col at-col-3'>
              <div className="confirm-label">手机号：</div>
            </View>
            <View className='at-col at-col-9'>
              <div className="confirm-detail">1111111</div>
            </View>
          </View>
          <View className='at-row row-wrap'>
            <View className='at-col at-col-3'>
              <div className="confirm-label">嘻嘻嘻：</div>
            </View>
            <View className='at-col at-col-9'>
              <div className="confirm-detail">202105421</div>
            </View>
          </View>
        </View>
      </View>
      <View className='cancel-button' onClick={()=>{
         Taro.navigateTo({
          url: `/pages/register/index`
        })
      }}>
        上一步
      </View>
      <View className='confirm-button' onClick={()=>{setIsOpened(true)}}>
        确定
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
          嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻
          </div>
          <div className="register-message-confirm" onClick={() => {
            setIsOpened(false)
          }}>确定</div>
        </AtModalContent>
      </AtModal>
    </View>
  )
}
export default Confirm;