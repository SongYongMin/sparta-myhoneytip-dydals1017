import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'

export default function DetailPage() {
    const tip = {
        "idx": 9,
        "category": "재테크",
        "title": "렌탈 서비스 금액 비교해보기",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        "desc": "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date": "2020.09.09"
    }
    const popup = () => {
        Alert.alert("팝업!!")
    }
    return (
        <ScrollView style={styles.Box}>
            <Image style={styles.image} source={{ uri: tip.image }} />
            <View style={styles.textBox}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.decs}>{tip.desc}</Text>
                <Text style={styles.date}>{tip.date}</Text>
                <TouchableOpacity style={styles.button} onPress={() => popup()}><Text style={styles.buttonText}>팁 찜하기</Text></TouchableOpacity>

            </View>



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor: '#333333',
    },
    image: {
        backgroundColor: '#cccccc',
        height: 390,
        margin: 10,
        marginTop: 40,
        borderRadius: 20
    },
    textBox: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#ffff33',
        fontSize: 21,

    },
    decs: {
        fontSize: 13.8,
        color: 'white'

    },
    date: {
        fontSize: 12,
        color: '#999999'

    },
    button: {
        width: 111,
        marginTop: 21,
        padding: 10.2,
        borderWidth: 1,
        borderColor: 'deeppink',
        borderRadius: 7,
        //justifyContent:'center',
        //alignItems:'center'

    },
    buttonText: {
        fontSize: 17.4,
        color: '#fff',
        textAlign: 'center'

    }
})