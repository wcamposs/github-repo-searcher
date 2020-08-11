import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    repository: {
        alignItems: 'flex-start',
        padding: 24
    },

    repositoryName: {
        fontFamily: 'Archivo_700Bold',
        color: '#000',
        fontSize: 19,
    },

    repositoryOwner: {
        fontFamily: 'Archivo_400Regular',
        color: '#333',
        fontSize: 16,
        marginTop: 8
    },
});

export default styles;