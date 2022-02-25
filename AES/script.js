new Vue({
  el: '#app',
  data() {
    return {
      title: 'AES Key-String',
      text: 'encrypt-text',
      key: 'BUCEA',
      showPw: false,
      decoder: QCodeDecoder(),
      qrData: null,
      requirePassword: false,
      password: null,
      wrongPassword: false,
      decData: null };

  },
  computed: {
    encrypted() {
      return this.encrypt(this.text, this.key);
    },
    qrCodeImg() {
      const qr = new QRious({
        value: this.encrypted,
        size: 1000,
        foreground: '#414141' });

      return qr.toDataURL('image/png');
    },
    btnDisabled() {
      return !this.text.length || !this.key.length;
    } },

  methods: {
    encrypt(text, key) {
      const cipherText = CryptoJS.AES.encrypt(text, key);
      return cipherText.toString();
    },
    print() {
      window.print();
    },
    tgPw() {
      this.showPw = !this.showPw;
    }} });
