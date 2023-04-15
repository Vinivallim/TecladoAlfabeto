import React from 'react'
import { Button, Text, View } from 'react-native'

export default comp => {

    function executar() {
        alert('a-A (á)')
}
return (
    <>
        <Button
            title="a"
            onPress={executar}
        />
        <Button
            title="b"
            onPress={function () {
                alert('b-B (bê)')
            }}
        />
        <Button
            title="c"
            onPress={() => alert('c-C (cê)')}
        />
        <Button
            title="d"
            onPress={function () {
                alert('d-D (dê)')
            }}
        />
        <Button
            title="e"
            onPress={function () {
                alert('e-E (é)')
            }}
        />
        <Button
            title="f"
            onPress={() => alert('f-F (éfe)')}
        />
        <Button
            title="g"
            onPress={function () {
                alert('g-G (gê)')
            }}
        />
        <Button
            title="h"
            onPress={function () {
                alert('h-H (agá)')
            }}
        />
        <Button
            title="i"
            onPress={() => alert('i-I (i)')}
        />
    </>
)}