import React from "react";
import { View,Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
    return (
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={()=><View style={{height:10}}></View>}
        renderItem={({item:repo})=>(
            <RepositoryItem  {...repo} />
        )}>
        </FlatList>
    )

}

export default RepositoryList;