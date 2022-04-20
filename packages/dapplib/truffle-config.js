require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name rifle stick huge heavy kangaroo army gauge'; 
let testAccounts = [
"0x0db803b1163dcf69ae06ceaee17c5c4097c34ddd2263fca7fe1f5cfa160d3554",
"0x18eb3e22c2f6f66afaed56ecdafe392578da440e0b871cf27bc03322a148700d",
"0x27de39d0c61d2b0a86dffa482b5a6fffa9f9badd48c536cdb7e068a4f7942ce2",
"0xbc3355d74e3ae81ceabcf2b884f691907565041882fd753195f93bc441b8723f",
"0x66ba0d393c923be81bad40eafe8ae8514fd7c402032d6cd0c60ddfe348cd4ffa",
"0xbb32c9ead47950d9d4d8ab96f31ca9db70d4af57f45e18d557c28841a75020dd",
"0x8d78493442a08121dd2bb9fad1c8a760e7603bcbbd8ac1df8659ef288fe3b8d2",
"0xfbf645101910bdfae8e0b0f7a04ec4d27b9cfacd9761a94be21c83dea5eb703e",
"0x7a3141019870c214459a3327097a8d206dd060b0d3abee09fe37d3ff5fbecc01",
"0x6eb78b7cd9787383a5b351506a86ac8f1ff1add22a0d5c28a7600637e1986e4c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


