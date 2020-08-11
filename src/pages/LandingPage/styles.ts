import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
    },

    title: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 160,
        color: '#000',
        fontSize: 38,
        fontFamily: 'Archivo_700Bold'
    },

    subtitle: {
        alignItems: 'center',
        alignContent: 'center',
        color: '#000',
        fontSize: 16,
        lineHeight: 30,
        marginLeft: 0,
        marginTop: 90,
        margin: 40,
        fontFamily: 'Archivo_400Regular'
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
    },

    button: {
        height: 70,
        width: '95%',
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16
    },
});

export default styles;