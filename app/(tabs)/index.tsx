import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker, Alert, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [formValues, setFormValues] = useState({
    schoolType: '',
    schoolName: '',
    address: '',
    postalCode: '',
    province: '',
    city: '',
    phoneNumber: '',
    email: '',
    facebook: '',
    numberOfStudents: ''
  });

  const handleInput = (name) => (value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { schoolType, schoolName, address, postalCode, province, city, phoneNumber, email, numberOfStudents } = formValues;
    if (!schoolType || !schoolName || !address || !postalCode || !province || !city || !phoneNumber || !email || !numberOfStudents) {
      Alert.alert("Peringatan", "Harap isi semua field yang diperlukan!");
      return;
    }
    Alert.alert("Sukses", "Formulir berhasil disubmit!");
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>
        Tipe Sekolah <Text style={styles.required}>*</Text>
      </Text>
      <Picker
        selectedValue={formValues.schoolType}
        onValueChange={handleInput('schoolType')}
        style={styles.picker}
      >
        <Picker.Item label="Pilih Tipe Sekolah" value="" />
        <Picker.Item label="Negeri" value="negeri" />
        <Picker.Item label="Swasta" value="swasta" />
      </Picker>

      <Text style={styles.label}>Nama Sekolah<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textInput}
        value={formValues.schoolName}
        onChangeText={handleInput('schoolName')}
      
      />

      <Text style={styles.label}>Alamat<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textInput}
        value={formValues.address}
        onChangeText={handleInput('address')}
      />

      <Text style={styles.label}>Kode Pos<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        value={formValues.postalCode}
        onChangeText={handleInput('postalCode')}
      />

      <Text style={styles.label}>Provinsi<Text style={styles.required}>*</Text></Text>
      <Picker
        selectedValue={formValues.province}
        onValueChange={handleInput('province')}
        style={styles.picker}
      >
        <Picker.Item label="Pilih Provinsi" value="" />
        <Picker.Item label="Jawa Barat" value="jawa_barat" />
        <Picker.Item label="Jawa Tengah" value="jawa_tengah" />
      </Picker>

      <Text style={styles.label}>Kota/Kabupaten<Text style={styles.required}>*</Text></Text>
      <Picker
        selectedValue={formValues.city}
        onValueChange={handleInput('city')}
        style={styles.picker}
      >
        <Picker.Item label="Pilih Kota/Kabupaten" value="" />
        <Picker.Item label="Bandung" value="bandung" />
        <Picker.Item label="Semarang" value="semarang" />
      </Picker>

      <Text style={styles.label}>No Telepon Sekolah<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textInput}
        keyboardType="phone-pad"
        value={formValues.phoneNumber}
        onChangeText={handleInput('phoneNumber')}
      />

      <Text style={styles.label}>Email Sekolah<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textInput}
        keyboardType="email-address"
        value={formValues.email}
        onChangeText={handleInput('email')}
      />

      <Text style={styles.label}>Facebook</Text>
      <TextInput
        style={styles.textInput}
        value={formValues.facebook}
        onChangeText={handleInput('facebook')}
      />

      <Text style={styles.label}>Jumlah Siswa</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={formValues.numberOfStudents}
        onChangeText={handleInput('numberOfStudents')}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    color: '#000'
  },
  required: {
    color: 'red'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  picker: {
    height: 44,
    marginBottom: 10
  }
});
