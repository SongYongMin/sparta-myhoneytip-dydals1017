import { StatusBar } from 'expo-status-bar';
import React from 'react';
import main from './assets/main.png';
import pizzaImg from './assets/pizza.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import data from './data.json';

export default function App() {
  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림"
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    <ScrollView style={styles.mainScreen}>
      <Text style={styles.title}>▷나만의 꿀팁!◁</Text>
      <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <Image style={styles.mainimage} source={main} />
      <ScrollView style={styles.menuBox} horizontal indicatorStyle='white'>
        <TouchableOpacity style={styles.menu1}><Text style={styles.menuText}>생   활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menu2}><Text style={styles.menuText}>재태크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menu3}><Text style={styles.menuText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menu4}><Text style={styles.menuText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      {/* <View style={styles.cardBox}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={pizzaImg} />
          <View style={styles.cardTextBox}>
            <Text style={styles.cardTextTitle}>먹다 남은 피자를 촉촉하게</Text>
            <Text style={styles.cardText} numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다. </Text>
            <Text style={styles.cardTextDate}>2020.09.09</Text>
          </View>
        </View>
      </View> */}
      <View style={styles.cardBox}> {
        tip.map((content, i) => {
          return i % 2 == 0 ?
            (
              <View style={styles.cardEven} key={i}>
                <Image style={styles.cardImage} source={{ uri: content.image }} />
                <View style={styles.cardTextBox}>
                  <Text style={styles.cardTextTitle} numberOfLines={1}>{content.title}</Text>
                  <Text style={styles.cardText} numberOfLines={3}>{content.desc}</Text>
                  <Text style={styles.cardTextDate}>{content.date}</Text>
                </View>
              </View>
            )
            :
            (
              <View style={styles.cardOdd} key={i}>
                <Image style={styles.cardImage} source={{ uri: content.image }} />
                <View style={styles.cardTextBox}>
                  <Text style={styles.cardTextTitle} numberOfLines={1}>{content.title}</Text>
                  <Text style={styles.cardText} numberOfLines={3}>{content.desc}</Text>
                  <Text style={styles.cardTextDate}>{content.date}</Text>
                </View>
              </View>
            )
        })
      }
      </View>
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
    //backgroundColor: 'blue',    //영역확인용
    color: 'white',
    fontSize: 21,
    fontWeight: '700',
    marginLeft: 0,
    marginTop: 21,
  },
  weather: {
    alignSelf: "flex-end",
    paddingRight: 3,
    color: '#cccccc'
  },
  mainimage: {
    marginTop: 12,
    width: '100%',
    height: 200,
    borderRadius: 12,
    //alignSelf:"center",
  },
  menuBox: {
    marginTop: 21,
    //backgroundColor: 'green',  //범위확인용
    //display: 'flex',          //이게 설정되면 스크롤이 안됨
    //flexDirection: 'column',   //
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
  },
  cardBox: {
    //height: 111,
    marginTop: 21,
    //backgroundColor: 'white',    //영역확인용
    // flexDirection: 'row',
  },
  card: {
    flex: 1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection: 'row',
    //margin: 10,
    //borderBottomWidth: 0.5,
    //borderBottomColor: "#eee",
    paddingBottom: 10,
    margin: 12,
  },
  cardImage: {
    height: 111,
    width: 111,
    borderRadius: 12,
    flex: 1,
    marginRight: 12,
  },
  cardTextBox: {
    //backgroundColor: 'white', //영역확인
    flex: 2,
  },
  cardTextTitle: {
    color: '#ffff33',
    fontSize: 18.3,
    fontWeight: 700,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 14.7,
  },
  cardTextDate: {
    color: '#999999',
    fontSize: 12,
  },
  cardEven: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#FFFED7",
    borderRadius: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10
  },
  cardOdd: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10
  },
});

