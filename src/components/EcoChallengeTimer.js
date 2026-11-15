import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CHALLENGE_SECONDS = 10 * 60;

export default function EcoChallengeTimer({ onClaimBonus }) {
  const [secondsLeft, setSecondsLeft] = useState(CHALLENGE_SECONDS);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsActive(false);
          Alert.alert(
            'Tantangan Berhasil!',
            'Kamu menyelesaikan 10 menit hemat listrik dan mendapatkan +25 Poin Hijau.'
          );
          if (onClaimBonus) onClaimBonus(25);
          return CHALLENGE_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onClaimBonus]);

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(CHALLENGE_SECONDS);
  };

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');

  return (
    <View style={styles.card}>
      <Text style={styles.badge}>TANTANGAN HEMAT ENERGI</Text>
      <Text style={styles.desc}>
        Matikan lampu atau perangkat elektronik yang tidak digunakan selama 10 menit
      </Text>

      <Text style={styles.clock}>
        {mins}:{secs}
      </Text>

      <View style={styles.btnRow}>
        <TouchableOpacity
          style={[styles.mainBtn, isActive && styles.pauseBtn]}
          onPress={() => setIsActive((prev) => !prev)}
        >
          <Text style={styles.mainBtnText}>
            {isActive ? 'Jeda Tantangan' : 'Mulai Tantangan (+25 Poin)'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetBtnText}>Reset</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
  },
  badge: {
    fontSize: 11,
    fontWeight: '800',
    color: '#4ADE80',
    backgroundColor: '#052E16',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#166534',
  },
  desc: {
    fontSize: 13,
    color: '#CBD5E1',
    textAlign: 'center',
    lineHeight: 18,
  },
  clock: {
    fontSize: 42,
    fontWeight: '800',
    color: '#4ADE80',
    marginVertical: 10,
    letterSpacing: 2,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainBtn: {
    backgroundColor: '#22C55E',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  pauseBtn: {
    backgroundColor: '#F59E0B',
  },
  mainBtnText: {
    color: '#031A0E',
    fontSize: 13,
    fontWeight: '800',
  },
  resetBtn: {
    backgroundColor: '#1A2420',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2D3F36',
  },
  resetBtnText: {
    color: '#CBD5E1',
    fontSize: 13,
    fontWeight: '700',
  },
});