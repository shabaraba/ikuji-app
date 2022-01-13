# react-native-environment

## usage
After cloning the repository, you have to initialize and create react-native project using expo at first as following command:
```sh
docker exec -it app bash
expo init <app>
# <app> is your app-name.
```

Then, you have to exec following command to run app.

```sh
cd app
expo start
```

if your workspace is not local directory such as ec2, 

```sh
cd app
expo start --tunnel
```

After all, you can see QR code and scan it by the ExpoGo app in your mobile phone, your app is running in your devices.
