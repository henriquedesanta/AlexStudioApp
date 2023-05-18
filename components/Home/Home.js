import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function HomeScreen() {
    return (
        <Animatable.View animation="fadeIn" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('./../../assets/logo.png')}
                    style={styles.logo}
                />
            </View>

             <View style={styles.statsContainer}>
                <View>
                    <View style={styles.dashboard}>
                        <Text style={styles.statValue}>50</Text>
                        <Text style={styles.statLabel}>Clientes</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.dashboard}>
                        <Text style={styles.statValue}>R$ 500,00</Text>
                        <Text style={styles.statLabel}>Previsão Hoje</Text>
                    </View>
                </View>
            </View>

            <View style={styles.upcomingContainer}>
                <Text style={styles.upcomingTitle}>PRÓXIMOS ATENDIMENTOS</Text>
                <View style={styles.upcomingDivider} />
            

            <View style={styles.upcomingDetails}>
                {/* <View style={styles.upcomingIcon}>
                    <Image
                        //   source={require('./whatsapp.png')}
                        style={styles.icon}
                    />
                </View> */}
                <View style={styles.serviceClient}>
                    <Text>Corte de Cabelo</Text>
                    <Text>João Silva</Text>
                </View>
                <View style={{paddingTop: '10', paddingBottom: '10'}}/>
                <View style={styles.nextAppointments}>
                    <Text>22/02/2023</Text>
                    <Text>10:30</Text>
                    <Text>R$ 50,00</Text>
                </View>
            </View>
            </View>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 100,
    },
    statsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 40,
    },
    dashboard: {
        alignItems: 'center',
        backgroundColor: '#C16C27',
        borderRadius: 8,
        height: 75,
        width: 150,
        justifyContent: 'center',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    statLabel: {
        fontSize: 12,
        color: 'white',
        marginTop: 5,
    },
    upcomingContainer: {
        flex: 3,
        paddingHorizontal: 30,
    },
    upcomingTitle: {
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 10,
    },
    upcomingDivider: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
    },
    upcomingDetails: {
        // flexDirection: 'column',
        // justifyContent: 'center'
    },
    nextAppointments: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    serviceClient: {
        fontSize: '20',
        marginBottom: '65'
    }
});