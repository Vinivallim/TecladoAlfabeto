import React from 'react'
import { Button, Text, View } from 'react-native'

export default comp => {

    function executar() {
        alert('j-J (jóta)')
}
return (
    <>
        <Button
            title="j"
            onPress={executar}
        />
        <Button
            title="k"
            onPress={function () {
                alert('k-K (cá)')
            }}
        />
        <Button
            title="l"
            onPress={() => alert('l-L (éle)')}
        />
        <Button
            title="m"
            onPress={function () {
                alert('m-M (ême)')
            }}
        />
        <Button
            title="n"
            onPress={function () {
                alert('n-N (êne)')
            }}
        />
        <Button
            title="o"
            onPress={() => alert('o-O (ó)')}
        />
        <Button
            title="p"
            onPress={function () {
                alert('p-P (pê)')
            }}
        />
        <Button
            title="q"
            onPress={function () {
                alert('q-Q (quê)')
            }}
        />
        <Button
            title="r"
            onPress={() => alert('r-R (érre)')}
        />
    </>
)}