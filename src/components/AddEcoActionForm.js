import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ECO_CATEGORIES = [
  { label: 'Bebas Plastik', co2: 0.3, points: 15 },
  { label: 'Hemat Energi', co2: 0.5, points: 20 },
  { label: 'Transportasi', co2: 1.2, points: 30 },
];

export default function AddEcoActionForm({ onAddAction }) {
  const [title, setTitle] = useState('');
  const [selectedCat, setSelectedCat] = useState(ECO_CATEGORIES[0]);

  const handleCreate = () => {
    if (!title.trim()) {
      Alert.alert('Form Kosong', 'Masukkan nama aksi ramah lingkungan terlebih dahulu.');
      return;
    }

    onAddAction({
      id: Date.now().toString(),
      title: title.trim(),
      category: selectedCat.label,
      co2Kg: selectedCat.co2,
      points: selectedCat.points,
      completed: false,
    });

    setTitle('');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Catat Kebiasaan Hijau Baru</Text>

      <TextInput
        style={styles.input}
        placeholder="Contoh: Bawa tumbler sendiri ke kampus"
        placeholderTextColor="#64748B"
        value={title}
        onChangeText={setTitle}
      />

      <View style={styles.catRow}>
        {ECO_CATEGORIES.map((cat) => {
          const active = selectedCat.label === cat.label;
          return (
            <TouchableOpacity
              key={cat.label}
              style={[styles.chip, active && styles.chipActive]}
              onPress={() => setSelectedCat(cat)}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {cat.label} (+{cat.points}p)
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handleCreate}>
        <Text style={styles.submitText}>+ Tambahkan ke Daftar Aksi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#101714',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1E2E26',
  },
  heading: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4ADE80',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1E2E26',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#F1F5F9',
    backgroundColor: '#070A09',
    marginBottom: 10,
  },
  catRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  chip: {
    backgroundColor: '#1A2420',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#263830',
  },
  chipActive: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  chipText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#CBD5E1',
  },
  chipTextActive: {
    color: '#031A0E',
    fontWeight: '800',
  },
  submitBtn: {
    backgroundColor: '#22C55E',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#031A0E',
    fontSize: 14,
    fontWeight: '800',
  },
});