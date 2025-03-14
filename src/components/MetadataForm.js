import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useVideoStore } from '../store/useVideoStore';

export default function MetadataForm({ uri, onSave }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { addVideo } = useVideoStore();

    const handleSave = () => {
        addVideo({ uri, name, description });
        onSave();
    };

    return (
        <View>
            <TextInput
                placeholder="Video Adı"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Açıklama"
                value={description}
                onChangeText={setDescription}
                multiline
                style={{ borderWidth: 1, padding: 10 }}
            />
            <Button title="Kaydet" onPress={handleSave} />
        </View>
    );
}
