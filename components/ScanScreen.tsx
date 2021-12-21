import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Modal, Portal, Provider} from 'react-native-paper';
import {RNCamera} from 'react-native-camera';
import {Image, Text, View} from 'react-native';
import {IMAGE_TICK} from '../images';
import styled from 'styled-components';

export function ScanScreen({navigation}: {navigation: any}) {
  const [qrContent, setQrContent] = React.useState('');
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const onSuccess = (e: any) => {
    setQrContent(e.data);
    setTimeout(() => {
      navigation.goBack();
    }, 5000);
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={qrContent !== ''}
          onDismiss={() => {
            setQrContent('');
          }}
          contentContainerStyle={containerStyle}>
          <ViewContainer>
            <Image style={{width: 150, height: 100}} source={IMAGE_TICK} />
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              You have redeemed ${qrContent}
            </Text>
          </ViewContainer>
        </Modal>
      </Portal>
      <QRCodeScanner
        onRead={onSuccess}
        // @ts-ignore
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={<Text>Please scan QR code for redemption</Text>}
      />
    </Provider>
  );
}

const ViewContainer = styled(View)`
  justify-content: center;
  align-items: center;
  height: 300px;
`;
