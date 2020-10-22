const dummyExternalItems = {
  items: [
    [
      null,
      null,
      null,
      null,
      {
        id: '4',
        name: 'Булка',
        category: 'eat',
        mainCell: [
          4,
          0
        ],
        width: 1,
        height: 1,
        currentCount: 1,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Eat, Server',
          Code: 'hamburger',
          BasicPrice: 10,
          Category: 'Eat',
          Info: null,
          ID: 4,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      null,
      {
        id: '3',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          6,
          0
        ],
        width: 3,
        height: 2,
        currentCount: 6,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 3,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '3',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          6,
          0
        ],
        width: 3,
        height: 2,
        currentCount: 6,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 3,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '3',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          6,
          0
        ],
        width: 3,
        height: 2,
        currentCount: 6,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 3,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      {
        id: '1',
        name: 'Pistol',
        category: 'weapon_rifle',
        mainCell: [
          2,
          1
        ],
        width: 3,
        height: 2,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Gun, Server',
          WeaponHash: 453432689,
          MagazineCount: 0,
          Package: null,
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Weapon_Rifle',
          Info: null,
          ID: 1,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '1',
        name: 'Pistol',
        category: 'weapon_rifle',
        mainCell: [
          2,
          1
        ],
        width: 3,
        height: 2,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Gun, Server',
          WeaponHash: 453432689,
          MagazineCount: 0,
          Package: null,
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Weapon_Rifle',
          Info: null,
          ID: 1,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '1',
        name: 'Pistol',
        category: 'weapon_rifle',
        mainCell: [
          2,
          1
        ],
        width: 3,
        height: 2,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Gun, Server',
          WeaponHash: 453432689,
          MagazineCount: 0,
          Package: null,
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Weapon_Rifle',
          Info: null,
          ID: 1,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      null,
      {
        id: '3',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          6,
          0
        ],
        width: 3,
        height: 2,
        currentCount: 6,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 3,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '3',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          6,
          0
        ],
        width: 3,
        height: 2,
        currentCount: 6,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 3,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '3',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          6,
          0
        ],
        width: 3,
        height: 2,
        currentCount: 6,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 3,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      {
        id: '1',
        name: 'Pistol',
        category: 'weapon_rifle',
        mainCell: [
          2,
          1
        ],
        width: 3,
        height: 2,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Gun, Server',
          WeaponHash: 453432689,
          MagazineCount: 0,
          Package: null,
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Weapon_Rifle',
          Info: null,
          ID: 1,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '1',
        name: 'Pistol',
        category: 'weapon_rifle',
        mainCell: [
          2,
          1
        ],
        width: 3,
        height: 2,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Gun, Server',
          WeaponHash: 453432689,
          MagazineCount: 0,
          Package: null,
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Weapon_Rifle',
          Info: null,
          ID: 1,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '1',
        name: 'Pistol',
        category: 'weapon_rifle',
        mainCell: [
          2,
          1
        ],
        width: 3,
        height: 2,
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAjBSURBVHic7Z1fbBxHHcc/Z9/ZuXN8tuOzQ2SfbZJQBVJaWpKQOKEVLyDUFlVCoFY8gISUviCBBAjEvwf+SCDEEy+AhIQAiReEqIQAlQKFJo6bBFB5aCQKqI2dFP+5/LETn+u/PFzubmfubu9md+bO5/19pJVu5nZnZ3e+N/Pb3292DgRBEARBEARBEARBEARBEARBEMx4DJgFtg2368ATLahvs/kQhWs1vT8zwAdbUF9jZjC/uOKWA9LNr3LTSFO4xqD352rzq2xO0Isrbl9pfpWbxlcJf392PGEv8CbQ3/Rauyfsr9+JAOK2C9R53/v9h62NjQ2mX3yB9fX1YlY/8Cngm46r1mw+DewrJuLxBKceeZR4POF70J+f+53TSnU4Lb0B4vE4o+MTevZn2V29QBr4jDcjOzFRt/GbQcsFADA6NkEiodyMYi+wW6j49Y+OjbewOmV2hAB2eS+wY3/9QQn6nC+b2y2QnyBmesC9E40GOE5wzwwwZnJAEAFYfxQRrGLUpjvCBhBaRzU/wGPAD4GRRgp4+hOfVNK/+MmPnX7falxfn+n16/ubUq0H+AENNr7Q/lQTgBh4EUJsgIhTNxag+/Jd+6brMfP6a/xt+gL5/IrVcpOpFMdOTu4YD12zaLse4PL0lPXGB8ivrHB5esp6uTsd6wJIplJVP9v6XrCLdQEcOzlJMpUqdalOvk/aF0at8+12rM8HGB0b9x1Hw36fHZ8gWxk4EgLSdjaAYBcRQMQRAUQcEUDEEQFEHBFAxBEBRJxqs0dkxs/uYBY4C/gGb0QAu5u6cwSrDQGzbuoitIBsvR2qCeAsIoLIEGRWsI4yZHztW9+xUGSZr3/5C0q63ruGUafKfA3fNpangIgjAog4IoCIY30+gD5mCzsb6QEijg0ByCNjG2NDAOI3aGNs+AFcI67pcIgfQKhNOwhAhpfgzNTboR0EIDZGMGYo3Dtf2sEGCItuQ5hc83eBzxUTYxMHiSfi/PfVf5V2eOuhw5x876PhamjAK/98mZf/ftmb9VPg40HLc75QZJvzbm+iN52mq7tb2WFhfr6pFcrs369nnQ5TXjsMAa0iBjzkzehN95Hu66Ojo3zb7iwvOXlZtRaDmSHl/MAh4EDQ8kQAtTmEZ53CeCJBMpWio6OTvb3qguaLTewFOjs7GRgc1LNPBS1PhoDaqN2/p9H7+gdYun2rlF6cn6v5vuL12RkuTp0jFotxYvIMB0YaW4DF77ih4f3kFha8u58GftVQwRrSA9TmEW+iN60KwMvC/FzNQi5dOE9+ZYWVu3e5OHWu4ZP7HZcZtmcHREEAy1q6p4FjuoCPejP6BvZ5Pqsr2N7M5djc3AxYPXOGKgXwEBDonfkoCOC6lj7awDHfADLFRGc8zsC+8rjb1dWtLF6xtbWld8klTkyeIdXTQ6qnhxOTZxqutN9xe5JJpUeiINjjDRfuoTPIQW3GSeABTzoP/N5n/6eB7+HxF4xmx8gMDSs7LS8tcWe53Ln0pvsY3v+WisJ602mOHL2fI0fv1xvNl3rH3cjluHXjhjfrVeDFhk9wjyj0AM9q6WeAd9XY9ykKjpVS43d1dTN+8HDFjrodsOhjB7ggMzysZwVa3iQKAvg18G9Puhv4LZUieAr4GZ4no1gsxjseeFD/LwOgmgDm2d5uXuCyih0wSYD2jIIA1oHPa3kHgJeA71MYIj5GtcZ/54PK2O+lZ+9eRRhra28qj4au6esf0L2SA8DbTcuJQiygyLcBpxMWj0+e5vB9R5S8N67NcnHqHCt374YqO5lKcfzUaUay5Te9/vL8c1yfVQJ+zwA/Mik3Cj1AkS8Bdt9a0Vicq7QDLk6dD934UFjH8NLUeSWvyjBg7A+IkgC2gC8CT1KwmK1TLTC0ublhrfx8fkUZZmwEhqIkgCLPUvAFfAT4OXAFuGOj4DvLS6zm80revsFMjb2D4Y071AgMVT6L+hDVWMA68Mt7W1imgfcUEwtaXCAzPMwb18rzWR4+foLHn/xww4X/9U/P88If/1BKLy7Mc/Bt9wHlwJDmhJrEIC4QxR7ANsrArPsDdAfS7FWzv//VF81cXFCHmbB2gAggPIoA9MDQ4NAwsVhM+f7N1dWGCx/JZol5uvmlW7dYX1srpcMGhkQA4VEEcDOXY3OjbPglEgnS/eXg0fb2Ntdm687VLNHdvYchTy+yvb1NbrHc5VfpAR7GIDAkAgjPHPCfYmJra4tcblHZoXIYeN3oBKNj6iov3mFgTzKpT1BJAMcaLVsEYAfVDpirYwfMGNoBWU0A87odUBEXaDjsKAKwg68doAduZq9eNYob6IZgbkGNO4TxB4gA7KBM2dEDQ+m+fsVvv7qaJ7eoDhN+ZDJDyn8krK2tsbx0u5QOExgSAdjhClAKzlcLDA1mhpS0kR0QizGSVRf88g4DVQJD/TQYGBIB2GEbuODNqDsMzBgagrodoPkDdDuDBocBEYA9zAzBHeIQEgHYQzME1QZy7hAKaAiKAOxxCSi1iP7GkGuHUNA3hkQA9sgD//Bm6M/rof0BPg6hoG8MiQDsYhgYMjUENTugwiFkPgyIAOzSWoeQCKDl+AaGwjuEMqYOobqBIRGAXeoGhlw6hIIEhkQA9vH3Bzh2CFUJDPkOAyIA+/jbAY4dQqb+ABGAfbQnAdVQc+0QqvEkULOdRQD2eYWKwFDZUKvqELpmzyFkGhgSAdinIjBkf6KovcCQCMANhnaAXYeQiT9ABOAGVQD1ngQsO4SGDAxBEYAbfANDrh1CJoEhEYAb6gaGXDqETAJDIgB3+AeGnDuEGhsGRADuaKpDKKc/CYgAWo5vYMi2Q+h2fYdQ1cCQCMAdvoEhNw6hcvmNBoZEAG5xPFFUtwPU8k0DQ4J9zlLwDO6U7TduL1fQOUrrG927VSxiJEOAW64A/2t1JTyEX61KMOZxCv951Opf/2vAB9xeqiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIreL/QHdQj9owOmAAAAAASUVORK5CYII=',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Gun, Server',
          WeaponHash: 453432689,
          MagazineCount: 0,
          Package: null,
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Weapon_Rifle',
          Info: null,
          ID: 1,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      null,
      null,
      null,
      null,
      {
        id: '2',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          9,
          2
        ],
        width: 3,
        height: 2,
        currentCount: 5,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 2,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '2',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          9,
          2
        ],
        width: 3,
        height: 2,
        currentCount: 5,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 2,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '2',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          9,
          2
        ],
        width: 3,
        height: 2,
        currentCount: 5,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 2,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        id: '2',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          9,
          2
        ],
        width: 3,
        height: 2,
        currentCount: 5,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 2,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '2',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          9,
          2
        ],
        width: 3,
        height: 2,
        currentCount: 5,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAazSURBVHic7Z3fixZVGMc/z7rurruKtpqu/bBldTOztFpD0bIirLBEsJ9iXfUDCgRL6O/ourvotroIquuCoqAkoiKhwPAiklArRVHX08XMtu++O+/MOTNnZpZ9ng8MuPvOOec7M5/3mZ87inMOQy99bQcw2sUEUI4JoJxSAojI0thByrAQcohIv4jIAshRal0ECyAidwLHywwWExF5BHix7RzAc8ATbYcAjovI1tBGEnoWICLvAk8C4865q6EDxkJEPk4zbGsrQ5rjW+Csc+6xFjMsBU4BnznnXglq7JzznoA1wCXAAUdC2sacgEngeprj0RZz7E0zOOCuFnMcSTNcBtaGtA3dBbwODKX/fjOwbUyOATP73bdazNE5dpvrY2bsQeCNoJYBlg0AfzBrvAP2tmD7DcCFjgzXgc0t5JgEpjtyBH/7IuXY27VNzgBDdVSAw8BY1+/asP41YKTjZyGpCE1zjLkH0YMkFbJpurfBjcBL3q0DTPueuaY5km/AxgZt7wdOZ+S4CIw2mGM0HbM7x5/AYIM5NjK3Cs1MP5Me4EepACLyMLA946M+4Ki3bdV5Brgl4/fDJJWhKV5Nx+xmLUmlbIqjZJ/KbwG8zkp8dwF5JeWwiCzx7KcqeTn8y1518sZq5NpEus7zZPNbHx5lZgA4y/wy0znta6jsXinIcXcDObYWZLhGAweDwL6CHP/gcTDoUwEeJznyzuMFj36q8jRQdLmziRzPF3y+hGRXVTdFy7oC2F/UiY8APiv1kIgMeMxXBZ8cRRsnBj5j1JojXdeHouQoKDPLgH/JLzUz04Eay90Y2Ue7WdP9Nea4xzPDNHBTjTkOeOa4CIxU2QU8BSwvtCihzvL7LP4HrHXm8P1m95FkrgvfZRwm2Ya9KTDtQ/xMcySVYllNxn8ZkOM0nufAJXL8FpDjq5oyhFRlB3yU21/OQIPM3vjxnQ7WsMBjzN748Z121pBje2CG68BYDTkOBua4RM7ZQF5Z3cHsjR9fHgic34c9zN74aTPHg4HzS005QvscItmWmeQJsDtwoLJt6uizjhx7GmpTRJll65kjtgBTIjJYol0eJkBKum6nYuaILUDZgJmIyBBwX4mmYyIyETHHBuDWEk3vFZGsewZlmSJZx6Hs7vXcYqYAIrKJ5MZGGWJ++3aQXIpuO0fZb3I/sDNijrLLtBq4I+uDXhWgysqLueIXSo4qpTzmbqDKMmXmMAH8WLQC9DrX/IGwc83uaSLSOe+ZChmmgeURMizH/zJ01nSeCBemgImK2+Sk13WA9GBhsodFvtxesT0isork8aay9AGbquYgeeqmyl9QrQTWRchRdZ1uzHpuI2vB1hJ+Aaib8YrtY/Vx2wLpYzxCH1VzLAFu7v5llgDjFQcCW/F19DEeoY95ObIEWCgLbH000EddFWAx9bEhQh/jC6SPectiFUB5H3VVgPURHhGLkSNGH63vv9N1uT5CjsaOAYTqpTNGjlER8X2iaR7pzZeyl8Q7qbosGwi/Jd6rnznUJQBUsD7daKvbzkG8FT8iImsqtB+PkAGKKoCIrMb/GcDgwRpqG7OvxZZjuFvE/q4Zpon3B44nKrQ9FzHHrxXanoqY40yFtici5rjW+UPwG0KMxYW9JUw5JoByTADlmADKMQGUYwIo5//rACLyOXGfYJ1hnXPub9+ZReQkcS/AAFx2zq0KaSAi56n+YEw3vzvnNgdkWEny3qHYfOOcewjmXggapNwz50WEXkqtK0coQ8TPEdqf1JBhTg7bBSjHBFCOCaAcE0A5JoByOs8CPgF+qWGMK4Hzf0DyWvqYlPl/Dd6n+LV0ofwVOP8V4L3IGSB51Q1gt4PVY7sA5ZgAyjEBlGMCKMcEUI4JoBwBvm5orLedc19khhAZBT5tKMfLzrmfeuSYJDn/b4L9zrmzPXLsAt5pIkTst1jlMZrz2UCDOVbkfDbSYI68v51c1VQO2wUoxwRQjgmgHBNAOSaAckwA5ZgAyjEBlGMCKMcEUI4JoBwTQDkmgHJMAOWYAMoxAZRjAijHBFCOCaAcE0A5JoByTADlmADKMQGUYwIoxwRQjgmgHBNAOSaAckwA5ZgAyjEBlGMCKMcEUI4JoBwTQDkmgHJMAOWYAMoxAZRjAijHBFCOCaAcE0A5JoByTADlmADKMQGUYwIoxwRQjgmgHBNAOSaAckwA5ZgAyjEBlGMCKMcEUI4JoBwBdjU01knn3LnMECJLgamGcvzonLvQI8cwsK2hHN855672yLES2NJECHHONTGOsUCxXYByTADlmADK+Q/YFr4df/TcpgAAAABJRU5ErkJggg==',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 2,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      {
        id: '2',
        name: 'Патроны для пистолета',
        category: 'ammo',
        mainCell: [
          9,
          2
        ],
        width: 3,
        height: 2,
        currentCount: 5,
        maxCount: 8,
        imageUrl: 'data:image/png;base64,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',
        isEquipped: false,
        isRotated: false,
        rest: {
          $type: 'Server.GameObjects.Ammo, Server',
          Code: 'pistol',
          BasicPrice: 10,
          Category: 'Ammo',
          Info: null,
          ID: 2,
          Transferability: true
        },
        isWeaponEquipped: false
      },
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
  ]
}

export {dummyExternalItems}