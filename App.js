import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog/lib/Input';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item.text}</Text>
  </TouchableOpacity>
);

const AppTest = () => {
   /* Ici le modifications*/
   const [monChoix, setMonChoix] = useState(null);
   const [modifText, onChangeModifText] = useState("d")

  const [motTemp, setMotTemp] = useState('');
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const showDialog = () => {
    setVisible(true);
  };

  const annulerMot = () => {
    setVisible(false);
  };

  const ajouterMot = () => {
    
    setVisible(false);
    setData(listActuelle => [...listActuelle, {id: data.length.toString(), text: motTemp}]);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#696969" : "lightsteelblue";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      
      <Item
        item={item}
        onPress={() => {  
          setSelectedId(item.id);
          setMonChoix(item.id);
          onChangeModifText(data[item.id].text);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };


const [visibleM, setVisibleM] = useState(false);

const showDialogM = () => {
  setVisibleM(true);
};

const annulerMotM = () => { 
  setVisibleM(false);
};

const modifierMot = () => {
  
  data[monChoix].text = modifText;
  setData(data);
  setVisibleM(false);
};


const [visibleR, setVisibleR] = useState(false);

const showDialogR = () => {
  setVisibleR(true);
};

const annulerMotR = () => {
  setVisibleR(false);
};

const retirerMot = () => {
  
  data[monChoix].text = '';
  setData(data);
  setVisibleR(false);
};(
 <View style= {styles.container}>
     <View style={styles.header}>
  
        <Text style={styles.title}>Projet SJP5</Text>
        <Text style={styles.title}>ESTELLE NOUASSI</Text>
      <View/>
      <View style= {styles.container1}>
    <View style={[styles.textContent, {borderColor: 'darkorange',}, styles.flatListContainer]}>
            {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}

            {/* ici est le code de la flatlist */}
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>

        <Text>Container 1</Text>
         
        </View>
        </View>
        <View style= {styles.containerdesbuttons}>
        <TouchableOpacity
            onPress={showDialog}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={showDialogM}
            style={styles.button}>
            <Text style={styles.buttonText}>M</Text>
         </TouchableOpacity>
         <TouchableOpacity
            onPress={showDialogR}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => Alert.alert('Hello, world!')}
            style={styles.button}>
            <Text style={styles.buttonText}>GVD</Text>
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => Alert.alert('Hello, world!')}
            style={styles.button}>
            <Text style={styles.buttonText}>DVG</Text>
         </TouchableOpacity>
        </View>
        <View style= {styles.container1}>
        <View style={[styles.textContent, {borderColor: 'darkorange',}, styles.flatListContainer]}>
            {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}

            {/* ici est le code de la flatlist */}
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>
        <Text>Container 2</Text>
        
        <View/>
     <View/>

     <View style={styles.footer}>
     <Text style={styles.message}>A PROPOS DE NOUS</Text>
        <Text style={styles.message}>Projet SJP5 </Text>
        <Text style={styles.message}>fait à Douala le 17 Novembre 2021</Text>
        <Text style={styles.message}>Developpement des applications mobiles</Text>
        <Text style={styles.message}>par MAFENE NOUASSI ESTELLE </Text>
        <Text style={styles.message}>email: emafene@univ-catho-sjd.com</Text>

      </View>
     <Dialog.Container visible={visible}>
        <Dialog.Title>Ajouter un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setMotTemp}
        />
        <Dialog.Button label="Annuler" onPress={annulerMot} />
        <Dialog.Button label="Ajouter" onPress={ajouterMot} />
      </Dialog.Container>

    <Dialog.Container visible={visibleM}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangeModifText}
          value={modifText}
        />
        <Dialog.Button label="Annuler" onPress={annulerMotM} />
        <Dialog.Button label="Modifier" onPress={modifierMot} />
    </Dialog.Container>

     
    <Dialog.Container visible={visibleR}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment supprimer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={annulerMotR} />
        <Dialog.Button label="OUi" onPress={retirerMot} />
    </Dialog.Container>
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 },

 container1: {
    width: 120,
    height: 300,
    backgroundColor: '#FF80FF',
    alignItems: 'center',
    justifyContent: 'center',
    },
    containerdesbuttons: {
        width: 90,
        height: 300,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 5,
        marginLeft: 10
    },
    footer: {
    flex: 0.8,
    paddingTop: 5,        justifyContent: 'space-between',

    paddingLeft: 5,
  },
  message: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14,
    color: 'darkgray',
  },

    buttonText: {
        fontSize: 10,
        color: '#fff',
   },
   header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
