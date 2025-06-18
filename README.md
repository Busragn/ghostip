# Ghostip 🕊️  
### Blockchain-Based Anonymous Internal Feedback System

Ghostip is a decentralized Web3 platform enabling employees to submit **anonymous, secure, and verifiable internal feedback** to their organization. By using **pseudonymous wallets**, **asymmetric encryption**, and **Ethereum smart contracts**, Ghostip creates a tamper-proof and privacy-respecting feedback environment.

---

## 🔑 Key Features

- 🦊 **MetaMask Integration** – Pseudonymous login with wallet address only.
- ✅ **Whitelist Access Control** – Only approved wallets can connect.
- ✉️ **Encrypted Anonymous Messaging** – Messages are encrypted with recipient’s public key.
- 🧾 **IPFS File Storage** – Feedback is stored decentrally on IPFS.
- ⛓️ **Ethereum Smart Contracts** – Immutable message hashes are logged on-chain.
- 🗳️ **Feedback Categories & DAO Voting** – Messages are grouped and collective decisions are enabled.
- 🎖️ **NFT Rewards (Optional)** – Active users can earn anonymous badges.

---

## 🧰 Tech Stack

- `React.js`, `Vite`, `TailwindCSS` – Frontend framework
- `MetaMask`, `Ethers.js`, `Web3.js` – Wallet & Web3 support
- `Solidity`, `Hardhat` – Smart contracts
- `IPFS` – File storage
- `Ethereum Sepolia Testnet` – Deployment network

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-org/ghostip.git
cd ghostip
npm install
npm run dev
```

### 2. Environment

Create a `.env` file:

```env
VITE_CONTRACT_ADDRESS=0xYourContractAddress
VITE_IPFS_GATEWAY=https://ipfs.io/ipfs/
```

---

## 🔐 Security & Privacy

- Anonymous wallet login
- No real identity or email required
- Asymmetric end-to-end encryption
- Access via whitelist
- Message hashes recorded on blockchain

---

## 🏗️ Project Structure

```
ghostip/
├── contracts/              # Solidity smart contract files
├── frontend/               # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── lib/
├── public/
├── README.md
```

---


## 📌 References

- Forbes: [The Power of Feedback](https://www.forbes.com/councils/forbesbusinesscouncil/2024/07/18/the-power-of-feedback-a-catalyst-for-growth-in-leadership-and-employee-development/)
- Gallup: [Fast Feedback Fuels Performance](https://www.gallup.com/workplace/357764/fast-feedback-fuels-performance.aspx)
- Pseudonymous Wallet Overview: [MetaMask Docs](https://docs.metamask.io/)
- IPFS: [https://ipfs.tech/](https://ipfs.tech/)
