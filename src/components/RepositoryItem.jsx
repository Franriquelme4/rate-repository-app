import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import StyledText from "./StyleText";
import RepositoryItemStats from "./RepositoryItemStats.jsx";
import { theme } from "../theme";

const RepositoryItemHeader = ({ ownerAvatarUrl, fullname, description, language }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{paddingRight:10}}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            </View>
            <View style={{flex:1}}>
                <StyledText color="primary" fontSize="subheading" fontWeight="bold">{fullname}</StyledText>
                <StyledText >{description}</StyledText>
                <StyledText style={styles.language} >{language}</StyledText>
            </View>

        </View>
    )
};

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryItemStats {...props} />
        </View>
    );
};

export default RepositoryItem;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        overflow: "hidden",
        borderRadius: 4
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 4
    }
});

