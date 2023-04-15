import React from 'react'
import { Button, Text, View } from 'react-native'

export default comp => {

    function executar() {
        alert('s-S (ésse)')
}
return (
    <>
        <Button
            title="s"
            onPress={executar}
        />
        <Button
            title="t"
            onPress={function () {
                alert('t-T (tê)')
            }}
        />
        <Button
            title="u"
            onPress={() => alert('u-U (u)')}
        />
        <Button
            title="v"
            onPress={function () {
                alert('v-V (vê)')
            }}
        />
        <Button
            title="w"
            onPress={function () {
                alert('w-W (dáblio)')
            }}
        />
        <Button
            title="x"
            onPress={() => alert('x-X (xis)')}
        />
        <Button
            title="y"
            onPress={function () {
                alert('y-Y (ípsilon)')
            }}
        />
        <Button
            title="z"
            onPress={function () {
                alert('z-Z (zê)')
            }}
        />
    </>
)}