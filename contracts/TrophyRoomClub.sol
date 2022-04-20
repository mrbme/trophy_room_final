// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';

contract TrophyRoomClub is ERC721, Ownable, ERC721Enumerable {
    using SafeMath for uint256;
    using Strings for uint256;
    // Reserved
    uint256 public teamReserve = 10;

    // Presale
    uint256 public PRESALE_PRICE = 0.01 ether;
    uint256 public PRESALE_SUPPLY = 1000;
    bool public preSaleActive = false;
    uint256 public presaleMaxMint = 2;

    mapping(address => bool) private _presaleList;
    mapping(address => uint256) private _presaleListClaimed;

    // Public
    uint256 public PUBLIC_PRICE = 0.1 ether;
    bool public publicSaleActive = false;

    // All
    uint256 public MAX_SUPPLY = 2750;
    uint256 public maxMint = 5;

    string internal baseTokenUri;
    string public baseExtension = '.json';
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;
    event Minted(uint256 tokenId, address owner);

    constructor() payable ERC721('TrophyRoomClub', 'TRC') {}

    /////////////////////////
    /////// Reserved ////////
    /////////////////////////
    function reserveTokens(address to, uint256 quantity) external onlyOwner {
        require(quantity <= teamReserve, 'No reserve left');
        for (uint256 i = 0; i < quantity; i++) {
            uint256 newTokenId = totalSupply().add(1);

            _safeMint(to, newTokenId);
            emit Minted(newTokenId, msg.sender);
        }
    }

    /////////////////////////
    ///// Presale Mint //////
    /////////////////////////

    function setPreSaleActive(bool preSaleActive_) external onlyOwner {
        preSaleActive = preSaleActive_;
    }

    function changePresalePrice(uint256 price) external onlyOwner {
        PRESALE_PRICE = price;
    }

    function updatePresaleSupply(uint256 newLimit) external onlyOwner {
        PRESALE_SUPPLY = newLimit;
    }

    function changePresaleMaxMint(uint256 maxMint_) external onlyOwner {
        presaleMaxMint = maxMint_;
    }

    function addToPresaleList(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Can't add the null address");

            _presaleList[addresses[i]] = true;
        }
    }

    function removeFromPresaleList(address[] calldata addresses)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Can't add the null address");

            _presaleList[addresses[i]] = false;
        }
    }

    function onPreSaleList(address addr) external view returns (bool) {
        return _presaleList[addr];
    }

    function presaleMint(uint256 quantity_) external payable {
        require(preSaleActive, 'Presale is not active');
        require(_presaleList[msg.sender], 'You are not on the Presale List');
        require(
            totalSupply().add(quantity_) <= MAX_SUPPLY,
            'Purchase would exceed max supply of tokens'
        );
        require(
            quantity_ > 0 && quantity_ <= presaleMaxMint,
            'Cannot purchase this many tokens'
        );
        require(
            _presaleListClaimed[msg.sender].add(quantity_) <= presaleMaxMint,
            'Purchase exceeds max allowed'
        );
        require(
            msg.value >= PRESALE_PRICE.mul(quantity_),
            'Ether value sent is not correct'
        );

        for (uint256 i = 0; i < quantity_; i++) {
            uint256 newTokenId = totalSupply().add(1);
            _presaleListClaimed[msg.sender] += 1;
            _safeMint(msg.sender, newTokenId);
            emit Minted(newTokenId, msg.sender);
        }
    }

    //////////////////////////
    ////// Public Mint ///////
    //////////////////////////

    function setPublicSaleActive(bool publicSaleActive_) external onlyOwner {
        publicSaleActive = publicSaleActive_;
    }

    function changePublicSalePrice(uint256 price) external onlyOwner {
        PUBLIC_PRICE = price;
    }

    function changeMaxSupply(uint256 maxSupply_) external onlyOwner {
        MAX_SUPPLY = maxSupply_;
    }

    function changePublicMaxMint(uint256 maxMint_) external onlyOwner {
        maxMint = maxMint_;
    }

    function publicMint(uint256 quantity_) external payable {
        require(publicSaleActive, 'Sale not active');
        require(
            quantity_ > 0 && quantity_ <= maxMint,
            'Can only mint up to 5 tokens'
        );
        require(msg.value == quantity_ * PRESALE_PRICE, 'Wrong mint price');
        require(
            totalSupply().add(quantity_) <= MAX_SUPPLY,
            'Purchase would exceed max supply of tokens'
        );
        require(
            msg.value >= PUBLIC_PRICE.mul(quantity_),
            'Ether value sent is not correct'
        );

        for (uint256 i = 0; i < quantity_; i++) {
            uint256 newTokenId = totalSupply().add(1);
            _presaleListClaimed[msg.sender] += 1;
            _safeMint(msg.sender, newTokenId);
            emit Minted(newTokenId, msg.sender);
        }
    }

    //////////////////////
    /////// Other ///////
    //////////////////////

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function setBaseExtension(string memory _newExtension) public onlyOwner {
        baseExtension = _newExtension;
    }

    function tokenURI(uint256 tokenId_)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId_), 'Token does not exist!');
        return
            string(
                abi.encodePacked(
                    baseTokenUri,
                    Strings.toString(tokenId_),
                    baseExtension
                )
            );
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}(
            ''
        );
        require(success, 'withdraw failed');
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
