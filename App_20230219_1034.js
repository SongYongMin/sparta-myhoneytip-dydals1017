import { StatusBar } from 'expo-status-bar';
import React from 'react';
import main from './assets/main.png';
import pizzaImg from './assets/pizza.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.mainScreen}>
      <Text style={styles.title}>▷나만의 꿀팁!◁</Text>
      <Image style={styles.mainimage} source={main} />
      <ScrollView style={styles.menuBox} horizontal indicatorStyle='white'>
        <TouchableOpacity style={styles.menu1}><Text style={styles.menuText}>미   용</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menu2}><Text style={styles.menuText}>재태크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menu3}><Text style={styles.menuText}>할   인</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menu4}><Text style={styles.menuText}>바디프로필</Text></TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

// ▷▶◀◁

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: '#333333',
    padding: 12,
  },
  title: {
    backgroundColor: 'blue',
    fontSize: 21,
    fontWeight: '700',
    marginLeft: 0,
    marginTop: 21,
  },
  mainimage: {
    marginTop: 12,
    width: '90%',
    height: 200,
    borderRadius: 12,
  },
  menuBox: {
    marginTop: 21,
    backgroundColor: 'green',  //범위확인용
    display: 'flex',
    flexDirection: 'column',
  },
  //색상표 https://all4cs.tistory.com/50
  //256색상표 http://www.n2n.pe.kr/lev-1/color.htm
  menu1: {
    //marginTop:12,
    flexDirection: 'column',    //Text 정렬방향(아래justyfyContent 랑 세트)
    justifyContent: 'center',    //Text 상하 중간 맞춤
    //alignItems:"center",        //Text 수평 중간 맞춤 --> 배경에서 맞추는 것 보다 글자자체 정렬이 나음 
    height: 48,
    width: 120,
    borderRadius: 12,
    backgroundColor: '#ff99ff',
    marginRight: 12,
  },
  menu2: {
    //marginTop:12,
    flexDirection: 'column',   //Text 정렬방향(아래justyfyContent 랑 세트)
    justifyContent: 'center',   //Text 상하 중간 맞춤
    //alignItems:"center",       //Text 수평 중간 맞춤
    height: 48,
    width: 120,
    borderRadius: 12,
    backgroundColor: '#9966ff',
    marginRight: 12,
  },
  menu3: {
    //marginTop:12,
    flexDirection: 'column',   //Text 정렬방향(아래justyfyContent 랑 세트)
    justifyContent: 'center',   //Text 상하 중간 맞춤
    //alignItems:"center",       //Text 수평 중간 맞춤
    height: 48,
    width: 120,
    borderRadius: 12,
    backgroundColor: '#66ff99',
    marginRight: 12,
  },
  menu4: {
    //marginTop:12,
    flexDirection: 'column',   //Text 정렬방향(아래justyfyContent 랑 세트)
    justifyContent: 'center',   //Text 상하 중간 맞춤
    //alignItems:"center",       //Text 수평 중간 맞춤
    height: 48,
    width: 120,
    borderRadius: 12,
    backgroundColor: "#0000ff",

  },
  menuText: {
    fontSize: 18.4,
    textAlign: 'center',    //enum('auto','center','justify','left','right')
  }
});

