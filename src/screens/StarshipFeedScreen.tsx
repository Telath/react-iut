import { useQuery } from "@tanstack/react-query";
import React from "react";
import ContentLoader, { Facebook } from "react-content-loader/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import { default as data } from "../../api/data.json";
import { useImage } from "../hooks/useImages";
import { fetchStarships } from "../hooks/useStarships";

type ItemData = {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
};

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

const Item = ({ name, model, crew, hyperdrive_rating }: ItemData) => {
  const source = useImage(name);

  return (
    <Card>
      <Card.Title title={name} subtitle={model} left={LeftContent} />
      <Card.Content>
        <Text>Populace : {crew}</Text>
        <Text>Hyperdrive : {hyperdrive_rating}</Text>
      </Card.Content>
      <Card.Cover source={source} />
    </Card>
  );
};

export const StarshipFeedScreen = () => {
  const { isInitialLoading, isError, data } = useQuery(
    ["starships"],
    fetchStarships
  );

  console.log(data);

  if (isInitialLoading) {
    return (
      <View style={styles.test}>
        <Text>Loading…</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.test}>
        <Text>Error...</Text>
      </View>
    );
  }

  if (data.results === undefined) {
    return (
      <View style={styles.test}>
        <Text>Not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            model={item.model}
            crew={item.crew}
            hyperdrive_rating={item.hyperdrive_rating}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  test: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});
