import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const card_cidade = (nome, uf)=>{
    return(
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text>
            <> - </>
            <Text style={styles.uf}>{uf}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'gray'
    },
    cidade:{
        fontSize: 18,
        color: '#999',
        fontWeight: '500'
    },
    uf:{
        fontSize: 18,
        color: 'red',
        fontWeight: '700'
    }
  });