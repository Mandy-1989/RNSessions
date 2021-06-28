import React, {Component, useRef} from 'react';
import {Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Field} from 'redux-form';
import {Colors} from '../../theme';
import styles from './style';
interface Props {
  navigation?: any;
  title?: string;
  editable?: any;
  name?: string;
  refProp?: any;
  input?: any;
  multiline?: boolean;
  keyboardType?: string;
  inputFormat?: any;
  onChangeText?: Function;
  changeSuccessColor?: any;
  placeholder?: string;
  secureTextEntry?: any;
  _onFocus?: Function;
  _onBlur?: Function;
  selectTextOnFocus?: any;
  containerStyle?: any;
  onLayout?: any;
  ellipsizeMode?: any;
  numberOfLines?: number;
  returnKeyType?: string;
  autoFocus?: any;
  onEndEditing?: any;
  autoGrow?: any;
  maxLength?: number;
  autoCapitalize?: string;
  placeholderTextColor?: string;
  autoCorrect?: any;
  style?: any;
  disabled?: boolean;
  meta?: {touched; error; warning};
  leftSideComponent?: any;
  onSubmitEditing?: any;
  labelComponent?: any;
  info?: any;
  onInfoPress?: Function;
  itemInputStyle?: any;
  rightSideComponent?: any;
  textContentType?: any;
  rightIcon?: any;
  titleStyles?: any;
}
const CustomField: React.FC<Props> = props => {
  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef) {
      inputRef.current.focus();
    }
  };
  const {
    title,
    editable,
    name,
    refProp,
    input,
    multiline,
    keyboardType,
    inputFormat,
    onChangeText,
    changeSuccessColor,
    placeholder,
    secureTextEntry,
    _onFocus,
    _onBlur,
    selectTextOnFocus,
    containerStyle,
    onLayout,
    ellipsizeMode,
    numberOfLines,
    returnKeyType,
    autoFocus,
    onEndEditing,
    autoGrow,
    maxLength,
    autoCapitalize,
    placeholderTextColor,
    autoCorrect,
    style,
    disabled,
    meta: {touched, error, warning},
    leftSideComponent,
    onSubmitEditing,
    labelComponent,
    info,
    onInfoPress,
    itemInputStyle,
    rightSideComponent,
    textContentType,
    rightIcon,
    input: {value, ...restInput},

    titleStyles,
  } = props;

  const hasError = typeof error !== 'undefined' ? true : false;
  const itemStyle = itemInputStyle ? itemInputStyle : styles.itemInputField;
  let returnKey = returnKeyType
    ? Platform.OS === 'android'
      ? returnKeyType
      : keyboardType && keyboardType === 'numeric'
      ? 'done'
      : returnKeyType
    : null;

  return (
    <View onLayout={onLayout} style={[containerStyle]}>
      {title && (
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={[styles.rowTextView, titleStyles]}>
          {title}
        </Text>
      )}
      {labelComponent}
      <View style={itemStyle}>
        {leftSideComponent && <View>{leftSideComponent}</View>}
        <TextInput
          style={Object.assign([styles.inputStyle, style])}
          {...input}
          {...restInput}
          name={name}
          ref={refProp}
          // ref={refProp ? refProp : node => inputRef}
          keyboardType={keyboardType}
          placeholder={placeholder}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          selectTextOnFocus={selectTextOnFocus}
          placeholderTextColor={
            placeholderTextColor
              ? placeholderTextColor
              : Colors.placeholderTextColor
          }
          autoCapitalize={autoCapitalize}
          underlineColorAndroid={
            Platform.OS === 'android' ? 'transparent' : null
          }
          autoCorrect={false}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          ellipsizeMode="tail"
          editable={editable}
          autoFocus={autoFocus}
          onEndEditing={onEndEditing}
          onFocus={_onFocus}
          onSubmitEditing={onSubmitEditing}
          textContentType={textContentType}
        />
        {rightSideComponent && (
          <View>
            <TouchableOpacity onPress={rightIcon}>
              {rightSideComponent}
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={[styles.infoInputRaw]}>
        {hasError && touched ? (
          <View style={styles.errorInputRaw}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        {info && (
          <TouchableOpacity
            style={styles.infoRaw}
            onPress={() => onInfoPress()}>
            <Text style={styles.infoText}>{info}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const InputField: React.FC<Props> = props => {
  const focus = () => {
    //props.foo.getRenderedComponent().focusInput();
  };
  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef) {
      inputRef.current.focus();
    }
  };
  return <Field {...props} component={CustomField} ref={inputRef} withRef />;
};

// class CustomField extends Component {
//   focusInput() {
//     if (this.input) {
//       this.input.focus();
//     }
//   }

//   _doFormat = (mask, reference) => {
//     const {onChangeText} = this.props;
//     let newReference = mask;
//     let ignoreCount = 0;
//     for (let n = 0; n < reference.length; n++) {
//       if (reference.charAt(n) != mask.charAt(n)) {
//         newReference = newReference.replace('X', reference.charAt(n));
//         mask.charAt(n) != 'X' && ignoreCount++;
//       }
//     }
//     newReference = newReference.substr(0, reference.length + ignoreCount);
//     onChangeText(newReference);
//   };

//   render() {
//     const {
//       title,
//       editable,
//       name,
//       refProp,
//       input,
//       multiline,
//       keyboardType,
//       inputFormat,
//       onChangeText,
//       changeSuccessColor,
//       placeholder,
//       secureTextEntry,
//       _onFocus,
//       _onBlur,
//       selectTextOnFocus,
//       containerStyle,
//       onLayout,
//       ellipsizeMode,
//       numberOfLines,
//       returnKeyType,
//       autoFocus,
//       onEndEditing,
//       autoGrow,
//       maxLength,
//       autoCapitalize,
//       placeholderTextColor,
//       autoCorrect,
//       style,
//       disabled,
//       meta: {touched, error, warning},
//       leftSideComponent,
//       onSubmitEditing,
//       labelComponent,
//       info,
//       onInfoPress,
//       itemInputStyle,
//       rightSideComponent,
//       textContentType,
//       rightIcon,
//       input: {value, ...restInput},
//     } = this.props;
//     const hasError = typeof error !== 'undefined' ? true : false;
//     const itemStyle = itemInputStyle ? itemInputStyle : styles.itemInputField;
//     let returnKey = returnKeyType
//       ? Platform.OS === 'android'
//         ? returnKeyType
//         : keyboardType && keyboardType === 'numeric'
//         ? 'done'
//         : returnKeyType
//       : null;

//     return (
//       <View onLayout={onLayout} style={[containerStyle]}>
//         {title && (
//           <Text
//             numberOfLines={1}
//             ellipsizeMode={'tail'}
//             style={[styles.rowTextView, this.props.titleStyles]}>
//             {title}
//           </Text>
//         )}
//         {labelComponent}
//         <View style={itemStyle} underline error={hasError && touched}>
//           {leftSideComponent && <View>{leftSideComponent}</View>}
//           <TextInput
//             style={Object.assign([styles.inputStyle, style])}
//             {...input}
//             {...restInput}
//             name={name}
//             ref={refProp ? refProp : (node) => (this.input = node)}
//             keyboardType={keyboardType}
//             placeholder={placeholder}
//             multiline={multiline}
//             secureTextEntry={secureTextEntry}
//             onChangeText={onChangeText}
//             selectTextOnFocus={selectTextOnFocus}
//             placeholderTextColor={
//               placeholderTextColor
//                 ? placeholderTextColor
//                 : Colors.placeholderTextColor
//             }
//             autoCapitalize={autoCapitalize}
//             underlineColorAndroid={
//               Platform.OS === 'android' ? 'transparent' : null
//             }
//             autoCorrect={false}
//             returnKeyType={returnKeyType}
//             maxLength={maxLength}
//             ellipsizeMode="tail"
//             editable={editable}
//             autoFocus={autoFocus}
//             onEndEditing={onEndEditing}
//             onFocus={_onFocus}
//             onSubmitEditing={onSubmitEditing}
//             textContentType={textContentType}
//           />
//           {rightSideComponent && (
//             <View>
//               <TouchableOpacity onPress={rightIcon}>
//                 {rightSideComponent}
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//         <View style={[styles.infoInputRaw]}>
//           {hasError && touched ? (
//             <View style={styles.errorInputRaw}>
//               <Text style={styles.errorText}>{error}</Text>
//             </View>
//           ) : null}

//           {info && (
//             <TouchableOpacity style={styles.infoRaw} onPress={onInfoPress}>
//               <Text style={styles.infoText}>{info}</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>
//     );
//   }
// }

// class InputField extends Component {
//   focus() {
//     this.foo.getRenderedComponent().focusInput();
//   }

//   render() {
//     return (
//       <Field
//         {...this.props}
//         component={CustomField}
//         ref={node => (this.foo = node)}
//         withRef
//       />
//     );
//   }
// }

// export default InputField;
