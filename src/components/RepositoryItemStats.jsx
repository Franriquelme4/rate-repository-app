import React from "react";
import { View} from "react-native";
import StyledText from "./StyleText";

const parseThousands = (num) => {
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}k`;
    }
    return num;
}

const RepositoryItemStats = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText fontWeight='bold'>Stars:</StyledText>
                <StyledText >{parseThousands(props.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Forks:</StyledText>
                <StyledText >{parseThousands(props.forksCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Reviews:</StyledText>
                <StyledText >{parseThousands(props.reviewCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Rating:</StyledText>
                <StyledText >{props.ratingAverage}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryItemStats;