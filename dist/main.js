/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6366:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var react_dom_1 = __importDefault(__webpack_require__(3935));
var react_redux_1 = __webpack_require__(6213);
var store_1 = __importDefault(__webpack_require__(6152));
__webpack_require__(2589);
__webpack_require__(9277);
var App_1 = __importDefault(__webpack_require__(7292));
__webpack_require__(1664);
__webpack_require__(3661);
__webpack_require__(7664);
__webpack_require__(4294);
__webpack_require__(251);
__webpack_require__(8718);
__webpack_require__(3389);
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
    react_1.default.createElement(App_1.default, null)), document.getElementById('root'));


/***/ }),

/***/ 7292:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var AppBoard_1 = __importDefault(__webpack_require__(8378));
var App_module_scss_1 = __importDefault(__webpack_require__(3852));
var EquippedClosingInventoryContainer_1 = __importDefault(__webpack_require__(302));
var EquippedWeaponsInventoryContainer_1 = __importDefault(__webpack_require__(5389));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var left_sparks_svg_1 = __importDefault(__webpack_require__(3528));
var right_sparks_svg_1 = __importDefault(__webpack_require__(7992));
var board_1 = __webpack_require__(2947);
var RangeComponent_1 = __importDefault(__webpack_require__(9435));
var ContextMenu = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(7154)); }); });
var contextMenu_1 = __webpack_require__(1123);
var draggedItem_1 = __webpack_require__(9580);
var hoveredItem_1 = __webpack_require__(530);
var App = react_1.default.memo(function App() {
    var _this = this;
    var _a = __read(react_1.useState(false), 2), isOpen = _a[0], setIsOpen = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state; }), boardSquareSize = _b.board.boardSquareSize, contextMenu = _b.contextMenu, _c = _b.draggedItem, goingToDrop = _c.goingToDrop, draggedItem = _c.item, _d = _b.hoveredItem, hoveredItem = _d.item, hoveredItemArea = _d.hoveredArea;
    var goingToDropRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    var contextMenuRef = react_1.useRef();
    goingToDropRef.current = goingToDrop;
    draggedItemRef.current = draggedItem;
    contextMenuRef.current = contextMenu;
    if (!window.openInventory || !window.refreshInventory) {
        window.openInventory = function (info) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isOpen) {
                            setIsOpen(true);
                        }
                        return [4, board_1.openOrRefreshInventory(info)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); };
        window.refreshInventory = board_1.openOrRefreshInventory;
    }
    if (!window.openDoubleInventory) {
        window.openDoubleInventory = function (info) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, board_1.openDoubleInventory(info)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); };
    }
    if (!isOpen) {
        return null;
    }
    if (!boardSquareSize) {
        var bodyWidth = document.body.getBoundingClientRect().width;
        dispatch(board_1.setSquareSize(bodyWidth * 0.04125));
    }
    if (!document.oncontextmenu) {
        document.oncontextmenu = function (e) {
            e.preventDefault();
        };
    }
    var spaceDownHandler = function (e) {
        if (e.code.toLowerCase() === 'space') {
            e.preventDefault();
            if (draggedItem && draggedItem.width > 1 && draggedItem.height > 1) {
                dispatch(draggedItem_1.rotateItem());
            }
            else if (hoveredItem && hoveredItemArea !== 3 &&
                hoveredItem.width > 1 && hoveredItem.height > 1) {
                dispatch(draggedItem_1.rotateItemOnBoard(hoveredItem, hoveredItemArea));
            }
        }
    };
    document.onkeydown = spaceDownHandler;
    if (!window.onclick) {
        window.onclick = function () {
            console.log('window onclick');
            if (contextMenuRef.current.contextItem) {
                dispatch(contextMenu_1.closeContextMenu());
            }
        };
    }
    var removeCurrentHoveredItem = function () {
        if (hoveredItem) {
            dispatch(hoveredItem_1.removeHoveredItem());
        }
    };
    var tooltipMouseOverHandler = function (e) {
        if (draggedItemRef.current && !goingToDropRef.current) {
            dispatch(draggedItem_1.setGoingToDrop(true));
            e.stopPropagation();
        }
    };
    var tooltipStyles = {
        pointerEvents: goingToDrop ? 'none' : 'inherit',
        zIndex: goingToDrop ? 'auto' : 200,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: App_module_scss_1.default.AppContainer },
            react_1.default.createElement("div", { className: App_module_scss_1.default.TopTooltip, style: tooltipStyles, onMouseOver: tooltipMouseOverHandler },
                react_1.default.createElement(SecondaryText_1.default, { styles: { fontWeight: 600, color: '#fcfdff', width: 'auto' } }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 I \u0434\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430")),
            react_1.default.createElement("div", { className: App_module_scss_1.default.App },
                react_1.default.createElement(EquippedClosingInventoryContainer_1.default, { onMouseOver: removeCurrentHoveredItem }),
                react_1.default.createElement(AppBoard_1.default, { onMouseOver: removeCurrentHoveredItem }),
                react_1.default.createElement(EquippedWeaponsInventoryContainer_1.default, { onMouseOver: removeCurrentHoveredItem })),
            react_1.default.createElement("object", { type: "image/svg+xml", data: left_sparks_svg_1.default, className: App_module_scss_1.default.LeftSparksSvgContainer }),
            react_1.default.createElement("object", { type: "image/svg+xml", data: right_sparks_svg_1.default, className: App_module_scss_1.default.RightSparksSvgContainer }),
            contextMenu.contextItem && (react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement("div", null, "Loading...") }, !contextMenu.splitMenuOpen && (react_1.default.createElement(ContextMenu, { contextItem: contextMenu.contextItem, leftOffset: contextMenu.leftOffset, topOffset: contextMenu.topOffset, hoveredArea: contextMenu.hoveredArea })))),
            react_1.default.createElement(RangeComponent_1.default, { leftOffset: contextMenu.leftOffset, topOffset: contextMenu.topOffsetTopContext, contextItem: contextMenu.contextItem, hoveredArea: contextMenu.hoveredArea, splitMenuOpen: contextMenu.splitMenuOpen }),
            ")")));
});
exports.default = App;


/***/ }),

/***/ 7154:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var ContextMenu_module_scss_1 = __importDefault(__webpack_require__(135));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var contextMenu_1 = __webpack_require__(1123);
var ContextMenu = react_1.default.memo(function ContextMenu(_a) {
    var leftOffset = _a.leftOffset, topOffset = _a.topOffset, contextItem = _a.contextItem, hoveredArea = _a.hoveredArea;
    var contextActions = contextMenu_1.getContextActionsForCell(contextItem, hoveredArea);
    var height = 5.6 + (contextActions.length - 1) * 3.8;
    return (react_1.default.createElement("div", { className: ContextMenu_module_scss_1.default.ContextMenuWrapper, style: { left: leftOffset, top: topOffset, height: height + "%" }, onClick: function (e) { console.log('contextMenu click'); e.stopPropagation(); } },
        react_1.default.createElement("div", { className: ContextMenu_module_scss_1.default.ContextMenu }, contextActions.map(function (action, i) {
            return (react_1.default.createElement("div", { key: i, className: ContextMenu_module_scss_1.default.Button, onClick: function (e) { console.log('handler'); e.stopPropagation(); action.handler(); }, style: { backgroundColor: action.label.toLowerCase() === 'выкинуть' ? '#FF5306' : '#3A72F7' } },
                react_1.default.createElement(SecondaryText_1.default, { styles: { fontWeight: 800, textAlign: 'center', letterSpacing: '0.008rem' } }, action.label)));
        }))));
});
exports.default = ContextMenu;


/***/ }),

/***/ 6245:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var Overlay_module_scss_1 = __importDefault(__webpack_require__(6818));
var Overlay = function (_a) {
    var color = _a.color, _b = _a.fromOctagon, fromOctagon = _b === void 0 ? false : _b, _c = _a.fromWeapon, fromWeapon = _c === void 0 ? false : _c;
    var styles = {
        background: color,
    };
    if (fromOctagon) {
        styles = __assign(__assign({}, styles), { clipPath: "polygon(0 21.4%, 21.4% 0, 78.6% 0, 100% 21.4%, 100% 78.6%, 78.6% 100%, 21.4% 100%, 0 78.6%)" });
    }
    else if (fromWeapon) {
        styles = __assign(__assign({}, styles), { clipPath: "polygon(0% 10.56792%, 77.45% 10.56792%, 81.0447% 0%, 100% 0%,\n      100% 100%, 81.0447% 100%, 77.45% 89.43208%, 0% 89.43208%)" });
    }
    return (react_1.default.createElement("div", { style: styles, className: Overlay_module_scss_1.default.Overlay }));
};
exports.default = Overlay;


/***/ }),

/***/ 9435:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var RangeComponent_module_scss_1 = __importDefault(__webpack_require__(162));
var contextMenu_1 = __webpack_require__(1123);
var draggedItem_1 = __webpack_require__(9580);
var equippedItems_1 = __webpack_require__(1716);
var board_1 = __webpack_require__(2947);
var externalBoard_1 = __webpack_require__(4316);
var RangeComponent = react_1.default.memo(function (_a) {
    var leftOffset = _a.leftOffset, topOffset = _a.topOffset, contextItem = _a.contextItem, hoveredArea = _a.hoveredArea, splitMenuOpen = _a.splitMenuOpen;
    var containerRef = react_1.useRef();
    var _b = __read(react_1.useState(0), 2), splittedCount = _b[0], setSplittedCount = _b[1];
    var _c = __read(react_1.useState(), 2), reducedTopOffset = _c[0], setReducedTopOffset = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var _d = react_redux_1.useSelector(function (state) { return state; }), _e = _d.draggedItem, canDrop = _e.canDrop, hoveredSquare = _e.hoveredSquare, allHoveredSquares = _e.allHoveredSquares, draggedItem = _e.item, xDown = _e.xDown, yDown = _e.yDown, goingToDrop = _e.goingToDrop, goingToStack = _e.goingToStack, hoveredAreaOfScreen = _e.hoveredArea, _f = _d.board, boardCells = _f.board, boardSquareSize = _f.boardSquareSize, externalBoardCells = _d.externalBoard.externalBoard;
    var canDropRef = react_1.useRef();
    var hoveredSquareRef = react_1.useRef();
    var allHoveredSquaresRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    var xDownRef = react_1.useRef();
    var yDownRef = react_1.useRef();
    var goingToDropRef = react_1.useRef();
    var goingToStackRef = react_1.useRef();
    var externalBoardCellsRef = react_1.useRef();
    var hoveredAreaOfScreenRef = react_1.useRef();
    var boardCellsRef = react_1.useRef();
    console.log('canDrop start of the component', canDrop);
    canDropRef.current = canDrop;
    hoveredSquareRef.current = hoveredSquare;
    allHoveredSquaresRef.current = allHoveredSquares;
    draggedItemRef.current = draggedItem;
    xDownRef.current = xDown;
    yDownRef.current = yDown;
    goingToDropRef.current = goingToDrop;
    goingToStackRef.current = goingToStack;
    boardCellsRef.current = boardCells;
    externalBoardCellsRef.current = externalBoardCells;
    hoveredAreaOfScreenRef.current = hoveredAreaOfScreen;
    react_1.useEffect(function () {
        if (containerRef.current) {
            var rect = containerRef.current.getBoundingClientRect();
            setReducedTopOffset(rect.height);
        }
    }, [containerRef.current]);
    react_1.useEffect(function () {
        setSplittedCount(Math.floor(contextItem && contextItem.currentCount / 2));
    }, [contextItem]);
    var successButtonMouseDownHandler = function (event) {
        if (event.button !== 0)
            return;
        var contextItemWithChangedCount = __assign(__assign({}, contextItem), { currentCount: Number(splittedCount) });
        dispatch(draggedItem_1.addDraggedItem(contextItemWithChangedCount, contextItemWithChangedCount.mainCell));
        var requiredItem;
        if (hoveredArea === 1) {
            requiredItem =
                document.getElementById("square-common-item-" + contextItem.mainCell[0] + "-" + contextItem.mainCell[1]);
        }
        else if (hoveredArea === 2) {
            requiredItem = document.getElementById("external-square-common-item-" + contextItem.mainCell[0] + "-" + contextItem.mainCell[1]);
        }
        else if (hoveredArea === 3) {
            requiredItem = document.getElementById("square-equipped-item-" + contextItem.mainCell);
        }
        var newClone = requiredItem.cloneNode(true);
        var currentCountWrapper = newClone.childNodes[1];
        var currentCountEl = currentCountWrapper.childNodes[0];
        currentCountEl.textContent = String(splittedCount);
        newClone.addEventListener('dragstart', function (e) {
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
        newClone.style.zIndex = String(150);
        newClone.style.outline = 'none';
        newClone.style.backgroundColor = 'transparent';
        newClone.id = 'curr-dragged-item';
        if (typeof contextItem.mainCell === 'number') {
            newClone.style.width = boardSquareSize * contextItem.width * 1.25 + 'px';
            newClone.style.height = boardSquareSize * contextItem.height * 1.25 + 'px';
        }
        document.body.append(newClone);
        var moveAt = function (pageX, pageY) {
            newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
            newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
        };
        moveAt(event.pageX, event.pageY);
        var onMouseMove = function (event) {
            event.stopPropagation();
            moveAt(event.pageX, event.pageY);
        };
        document.addEventListener('mousemove', onMouseMove);
        newClone.onmouseover = function (e) {
            e.stopPropagation();
        };
        newClone.onmouseup = function () {
            console.log('canDropRef canDrop', canDropRef.current, canDrop);
            var goingToStackSaved = goingToStackRef.current;
            if (canDropRef.current) {
                if (goingToStackRef.current) {
                    console.log('goingToStackRef');
                    if (goingToStackRef.current.draggedItemNewCurrentCount > 0) {
                        var requiredItem_1 = document.getElementById("curr-dragged-item");
                        var currentCountWrapper_1 = requiredItem_1.childNodes[1];
                        var currentCountEl_1 = currentCountWrapper_1.childNodes[0];
                        currentCountEl_1.textContent = String(goingToStackSaved.draggedItemNewCurrentCount);
                        var contextItemWithChangedCount_1 = __assign(__assign({}, contextItem), { currentCount: goingToStackSaved.draggedItemNewCurrentCount });
                        dispatch(draggedItem_1.stackItem(true));
                        dispatch(draggedItem_1.draggedItemRelease());
                        dispatch(draggedItem_1.addDraggedItem(contextItemWithChangedCount_1, contextItemWithChangedCount_1.mainCell));
                        console.log('hov area of screen', hoveredAreaOfScreenRef.current);
                        if (hoveredAreaOfScreenRef.current === 1) {
                            dispatch(board_1.boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - (splittedCount - goingToStackSaved.draggedItemNewCurrentCount)));
                        }
                        else if (hoveredAreaOfScreenRef.current === 2) {
                            dispatch(externalBoard_1.externalBoardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - (splittedCount - goingToStackSaved.draggedItemNewCurrentCount)));
                        }
                        else if (hoveredAreaOfScreenRef.current === 3) {
                            dispatch(equippedItems_1.equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - (splittedCount - goingToStackSaved.draggedItemNewCurrentCount)));
                        }
                        return;
                    }
                }
            }
            document.body.removeChild(newClone);
            document.removeEventListener('mousemove', onMouseMove);
            newClone.onmouseup = null;
            if (canDropRef.current) {
                if (goingToStackRef.current) {
                    if (goingToStackRef.current.stackableItem.mainCell !== contextItem.mainCell) {
                        dispatch(draggedItem_1.stackItem(true));
                        if (hoveredArea === 1) {
                            dispatch(board_1.boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - splittedCount));
                        }
                        else if (hoveredArea === 2) {
                            dispatch(externalBoard_1.externalBoardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - splittedCount));
                        }
                        else if (hoveredArea === 3) {
                            dispatch(equippedItems_1.equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - splittedCount));
                        }
                    }
                }
                else if (goingToDropRef.current) {
                    if (hoveredArea === 1) {
                        dispatch(board_1.boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                    }
                    else if (hoveredArea === 2) {
                        dispatch(externalBoard_1.externalBoardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                    }
                    else if (hoveredArea === 3) {
                        dispatch(equippedItems_1.equippedChangeCurrentCount(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                    }
                    contextMenu_1.mpTriggerDropItem(draggedItemRef.current);
                }
                else if (hoveredAreaOfScreenRef.current === 3) {
                    if (contextItem.mainCell !== hoveredSquareRef.current) {
                        if (hoveredArea === 1) {
                            dispatch(board_1.boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                        }
                        else if (hoveredArea === 2) {
                            externalBoard_1.externalBoardChangeCurrentCountByItemId(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount);
                        }
                        else if (hoveredArea === 3) {
                            equippedItems_1.equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount);
                        }
                        try {
                            dispatch(equippedItems_1.setEquippedItem(hoveredSquareRef.current));
                        }
                        catch (e) { }
                    }
                }
                else if (hoveredAreaOfScreenRef.current === 1) {
                    if (hoveredArea === 3) {
                        dispatch(equippedItems_1.equippedChangeCurrentCount(contextItem.mainCell, contextItem.currentCount - draggedItemRef.current.currentCount));
                        try {
                            dispatch(board_1.addItem());
                        }
                        catch (e) { }
                    }
                    else if (hoveredArea === 1) {
                        var isPartOfItemHovered_1 = false;
                        allHoveredSquaresRef.current.forEach(function (hovSquare) {
                            if (boardCellsRef.current[hovSquare[1]][hovSquare[0]] && boardCellsRef.current[hovSquare[1]][hovSquare[0]].id === contextItem.id) {
                                isPartOfItemHovered_1 = true;
                            }
                        });
                        if (!isPartOfItemHovered_1) {
                            dispatch(board_1.boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                            try {
                                dispatch(board_1.addItem());
                            }
                            catch (e) { }
                        }
                    }
                    else if (hoveredArea === 2) {
                        dispatch(externalBoard_1.externalBoardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                        try {
                            dispatch(board_1.addItem());
                        }
                        catch (e) { }
                    }
                }
                else if (hoveredAreaOfScreenRef.current === 2) {
                    if (hoveredArea === 1) {
                        dispatch(board_1.boardChangeCurrentCountByItemId(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                        try {
                            dispatch(externalBoard_1.addExternalBoardItem());
                        }
                        catch (e) { }
                    }
                    else if (hoveredArea === 2) {
                        var isPartOfItemHovered_2 = false;
                        allHoveredSquaresRef.current.forEach(function (hovSquare) {
                            if (externalBoardCellsRef.current[hovSquare[1]][hovSquare[0]] && externalBoardCellsRef.current[hovSquare[1]][hovSquare[0]].id === contextItem.id) {
                                isPartOfItemHovered_2 = true;
                            }
                        });
                        if (!isPartOfItemHovered_2) {
                            dispatch(equippedItems_1.equippedChangeCurrentCount(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                            try {
                                dispatch(externalBoard_1.addExternalBoardItem());
                            }
                            catch (e) { }
                        }
                    }
                    else if (hoveredArea === 3) {
                        dispatch(equippedItems_1.equippedChangeCurrentCount(contextItem.id, contextItem.currentCount - draggedItemRef.current.currentCount));
                        try {
                            dispatch(externalBoard_1.addExternalBoardItem());
                        }
                        catch (e) { }
                    }
                }
            }
            dispatch(draggedItem_1.draggedItemRelease());
        };
    };
    var cancelButtonMouseDownHandler = function () {
        dispatch(contextMenu_1.closeContextMenu());
    };
    var splittedCountChangeHandler = function (e) {
        setSplittedCount(e.target.value);
    };
    var styles = {
        left: leftOffset,
        top: reducedTopOffset ? topOffset - reducedTopOffset : topOffset - 100
    };
    if (!splitMenuOpen) {
        return null;
    }
    return (react_1.default.createElement("div", { className: RangeComponent_module_scss_1.default.RangeComponentWrapper, style: styles, ref: containerRef, onClick: function (e) { return e.stopPropagation(); } },
        react_1.default.createElement("div", { className: RangeComponent_module_scss_1.default.RangeComponentBG },
            react_1.default.createElement("div", { className: RangeComponent_module_scss_1.default.InputRangeWrapper },
                react_1.default.createElement("input", { type: 'range', className: RangeComponent_module_scss_1.default.Input, value: splittedCount, onChange: splittedCountChangeHandler, min: 1, max: contextItem && contextItem.currentCount - 1, step: 1 })),
            react_1.default.createElement("div", { className: RangeComponent_module_scss_1.default.SplitCurrentCount }, splittedCount),
            react_1.default.createElement("div", { className: RangeComponent_module_scss_1.default.ButtonWrapper },
                react_1.default.createElement("div", { className: RangeComponent_module_scss_1.default.CancelButton, onClick: cancelButtonMouseDownHandler }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                react_1.default.createElement("div", { className: RangeComponent_module_scss_1.default.SuccessButton, onClick: successButtonMouseDownHandler }, "\u041E\u043A")))));
});
exports.default = RangeComponent;


/***/ }),

/***/ 6341:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var UniqueServerDescription_module_scss_1 = __importDefault(__webpack_require__(4007));
var logo_png_1 = __importDefault(__webpack_require__(3085));
var LeadText_1 = __importDefault(__webpack_require__(6965));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var draggedItem_1 = __webpack_require__(9580);
var UniqueServerDescription = react_1.default.memo(function UniqueServerDescription() {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.draggedItem; }), goingToDrop = _a.goingToDrop, draggedItem = _a.item;
    var goingToDropRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    goingToDropRef.current = goingToDrop;
    draggedItemRef.current = draggedItem;
    var mouseOverHandler = function (e) {
        if (draggedItemRef.current && !goingToDropRef.current) {
            dispatch(draggedItem_1.setGoingToDrop(true));
            e.stopPropagation();
        }
    };
    var styles = {
        pointerEvents: goingToDrop ? 'none' : 'inherit',
        zIndex: goingToDrop ? 'auto' : 200,
    };
    return (react_1.default.createElement("div", { className: UniqueServerDescription_module_scss_1.default.UniqueServerDescriptionContainer, style: styles, onMouseOver: mouseOverHandler },
        react_1.default.createElement("div", { className: UniqueServerDescription_module_scss_1.default.UniqueServerDescription },
            react_1.default.createElement("div", { className: UniqueServerDescription_module_scss_1.default.LogoContainer },
                react_1.default.createElement("div", { className: UniqueServerDescription_module_scss_1.default.ImageWrapper },
                    react_1.default.createElement("img", { className: UniqueServerDescription_module_scss_1.default.Image, src: logo_png_1.default }))),
            react_1.default.createElement("div", { className: UniqueServerDescription_module_scss_1.default.TextContainer },
                react_1.default.createElement(LeadText_1.default, { styles: { color: '#c4c5c7' } }, "EVION ROLEPLAY"),
                react_1.default.createElement(SecondaryText_1.default, { styles: { whiteSpace: 'normal' } },
                    react_1.default.createElement("div", { className: UniqueServerDescription_module_scss_1.default.ServerDescriptionText }))))));
});
exports.default = UniqueServerDescription;


/***/ }),

/***/ 1082:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var Board_module_scss_1 = __importDefault(__webpack_require__(493));
var Board = react_1.default.memo(function Board(_a) {
    var children = _a.children;
    var _b = __read(react_1.useState(null), 2), boardHeight = _b[0], setBoardHeight = _b[1];
    var _c = __read(react_1.useState(null), 2), boardWidth = _c[0], setBoardWidth = _c[1];
    var boardSquareSize = react_redux_1.useSelector(function (state) { return state.board.boardSquareSize; });
    react_1.useEffect(function () {
        setBoardHeight(boardSquareSize * 6);
        setBoardWidth(boardSquareSize * 16);
    }, []);
    var additionalStyles = {
        minWidth: boardWidth + "px",
        width: boardWidth + "px",
        maxWidth: boardWidth + "px",
        minHeight: boardHeight + "px",
        height: boardHeight + "px",
        maxHeight: boardHeight + "px"
    };
    return (react_1.default.createElement("div", { style: additionalStyles, className: Board_module_scss_1.default.Board, onMouseUp: function (e) { return e.stopPropagation(); } }, children));
});
exports.default = Board;


/***/ }),

/***/ 7356:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var BoardInfo_module_scss_1 = __importDefault(__webpack_require__(5184));
var cash_png_1 = __importDefault(__webpack_require__(3962));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var draggedItem_1 = __webpack_require__(9580);
var BoardInfo = react_1.default.memo(function BoardInfo(_a) {
    var cash = _a.cash;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state.draggedItem; }), goingToDrop = _b.goingToDrop, draggedItem = _b.item;
    var goingToDropRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    goingToDropRef.current = goingToDrop;
    draggedItemRef.current = draggedItem;
    var mouseOverHandler = function (e) {
        if (draggedItemRef.current && !goingToDropRef.current) {
            dispatch(draggedItem_1.setGoingToDrop(true));
            e.stopPropagation();
        }
    };
    var styles = {
        pointerEvents: goingToDrop ? 'none' : 'inherit',
        zIndex: goingToDrop ? 'auto' : 200,
    };
    return (react_1.default.createElement("div", { className: BoardInfo_module_scss_1.default.BoardInfo, style: styles, onMouseOver: mouseOverHandler },
        react_1.default.createElement("img", { src: cash_png_1.default }),
        react_1.default.createElement(SecondaryText_1.default, { styles: { width: 'auto', fontWeight: 500 } },
            "\u00A0\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435:",
            ' ',
            react_1.default.createElement("span", { className: BoardInfo_module_scss_1.default.CurrentCashText },
                "$",
                cash))));
});
exports.default = BoardInfo;


/***/ }),

/***/ 3176:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var ExternalBoard_module_scss_1 = __importDefault(__webpack_require__(801));
var ExternalBoard = react_1.default.memo(function ExternalBoard(_a) {
    var children = _a.children, rowsCount = _a.rowsCount;
    var _b = __read(react_1.useState(null), 2), boardHeight = _b[0], setBoardHeight = _b[1];
    var _c = __read(react_1.useState(null), 2), boardWidth = _c[0], setBoardWidth = _c[1];
    var boardSquareSize = react_redux_1.useSelector(function (state) { return state.board.boardSquareSize; });
    react_1.useEffect(function () {
        setBoardHeight(boardSquareSize * Number(rowsCount));
        setBoardWidth(boardSquareSize * 16);
    }, []);
    var additionalStyles = {
        gridTemplateRows: "repeat(" + rowsCount + ", 1fr)",
        minWidth: boardWidth + "px",
        width: boardWidth + "px",
        maxWidth: boardWidth + "px",
        height: boardHeight + "px",
    };
    var wrapperStyles = {
        maxHeight: boardHeight / rowsCount * 5 + "px",
        width: rowsCount < 7 ? boardWidth + "px" : boardWidth + 4 + "px",
        marginLeft: rowsCount < 7 ? 0 : '2px',
        background: 'rgba(96, 99, 110, 0.6)',
    };
    return (react_1.default.createElement("div", { style: wrapperStyles, className: ExternalBoard_module_scss_1.default.ExternalBoardWrapper },
        react_1.default.createElement("div", { style: additionalStyles, className: ExternalBoard_module_scss_1.default.ExternalBoard, onMouseUp: function (e) { return e.stopPropagation(); } }, children)));
});
exports.default = ExternalBoard;


/***/ }),

/***/ 5823:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var ClosingWeaponSquare_module_scss_1 = __importDefault(__webpack_require__(8947));
var react_redux_1 = __webpack_require__(6213);
var Overlay_1 = __importDefault(__webpack_require__(6245));
var react_redux_2 = __webpack_require__(6213);
var draggedItem_1 = __webpack_require__(9580);
var theme_1 = __importDefault(__webpack_require__(8321));
var types_1 = __webpack_require__(4400);
var equippedCategoriesToCells_1 = __webpack_require__(9412);
var hoveredItem_1 = __webpack_require__(530);
var ClosingWeaponSquare = react_1.default.memo(function ClosingWeaponSquare(_a) {
    var children = _a.children, coords = _a.coords;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_2.useSelector(function (state) { return state; }), _c = _b.draggedItem, draggedItem = _c.item, hoveredSquare = _c.hoveredSquare, canDrop = _c.canDrop, hoveredItem = _b.hoveredItem.item;
    var draggedItemRef = react_1.useRef();
    var hoveredSquareRef = react_1.useRef();
    draggedItemRef.current = draggedItem;
    hoveredSquareRef.current = hoveredSquare;
    var isOver = hoveredSquare === coords;
    var squareMouseOverHandler = function () {
        if (draggedItemRef.current) {
            if (!hoveredSquareRef.current || typeof hoveredSquareRef.current !== 'number' || hoveredSquareRef.current !== coords) {
                dispatch(draggedItem_1.setHoveredSquares(coords, 3));
            }
        }
        else if (hoveredItem) {
            dispatch(hoveredItem_1.removeHoveredItem());
        }
    };
    var closingWeaponSquareStyles = {
        pointerEvents: isOver ? 'none' : 'auto',
        zIndex: hoveredSquare === coords ? 'auto' : 200,
    };
    var successColor = theme_1.default.colors.success;
    var dangerColor = theme_1.default.colors.danger;
    var acceptedItemType = equippedCategoriesToCells_1.EquippedCategoriesToCells[coords];
    if (types_1.WeaponItemTypes.includes(acceptedItemType)) {
        successColor = "linear-gradient(90deg, transparent, " + theme_1.default.colors.success + " 100%)";
        dangerColor = "linear-gradient(90deg, transparent, " + theme_1.default.colors.danger + " 100%)";
    }
    var isFromOctagon = coords !== 1 && coords !== 2 && coords !== 3;
    return (react_1.default.createElement("div", { className: ClosingWeaponSquare_module_scss_1.default.ClosingWeaponSquare, style: closingWeaponSquareStyles, onMouseOver: squareMouseOverHandler },
        children,
        isOver && canDrop && react_1.default.createElement(Overlay_1.default, { color: successColor, fromOctagon: isFromOctagon, fromWeapon: !isFromOctagon }),
        isOver && !canDrop && react_1.default.createElement(Overlay_1.default, { color: dangerColor, fromOctagon: isFromOctagon, fromWeapon: !isFromOctagon })));
});
exports.default = ClosingWeaponSquare;


/***/ }),

/***/ 696:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var Octagon_module_scss_1 = __importDefault(__webpack_require__(1298));
var Octagon = react_1.default.memo(function Octagon(_a) {
    var children = _a.children, coords = _a.coords;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: Octagon_module_scss_1.default.Octagon },
            react_1.default.createElement("div", { className: Octagon_module_scss_1.default.TopBorder }),
            react_1.default.createElement("div", { className: Octagon_module_scss_1.default.BottomBorder })),
        react_1.default.createElement("div", { className: Octagon_module_scss_1.default.TransparentHoveEl, onMouseOver: function (e) { return e.stopPropagation(); } }, children)));
});
exports.default = Octagon;


/***/ }),

/***/ 5403:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var CommonItem_module_scss_1 = __importDefault(__webpack_require__(1339));
var CommonItem = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: CommonItem_module_scss_1.default.CommonItem }, children));
};
exports.default = CommonItem;


/***/ }),

/***/ 2410:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var EquippedItem_module_scss_1 = __importDefault(__webpack_require__(817));
var EquippedItem = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: EquippedItem_module_scss_1.default.EquippedItem }, children)));
};
exports.default = EquippedItem;


/***/ }),

/***/ 1226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var BackDrop_module_scss_1 = __importDefault(__webpack_require__(2004));
var draggedItem_1 = __webpack_require__(9580);
var BackDrop = react_1.default.memo(function BackDrop() {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.draggedItem; }), goingToDrop = _a.goingToDrop, draggedItem = _a.item;
    var goingToDropRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    goingToDropRef.current = goingToDrop;
    draggedItemRef.current = draggedItem;
    var mouseOverHandler = function (e) {
        if (draggedItemRef.current && !goingToDropRef.current) {
            dispatch(draggedItem_1.setGoingToDrop(true));
            e.stopPropagation();
        }
    };
    var style = {
        pointerEvents: goingToDrop ? 'none' : 'inherit',
        zIndex: goingToDrop ? 'auto' : 200,
    };
    return (react_1.default.createElement("div", { className: BackDrop_module_scss_1.default.BackDrop, onMouseOver: mouseOverHandler, style: style }));
});
exports.default = BackDrop;


/***/ }),

/***/ 6965:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var LeadText_module_scss_1 = __importDefault(__webpack_require__(3599));
var LeadText = react_1.default.memo(function LeadText(_a) {
    var children = _a.children, _b = _a.styles, styles = _b === void 0 ? {} : _b;
    return (react_1.default.createElement("div", { className: LeadText_module_scss_1.default.LeadText, style: styles }, children));
});
exports.default = LeadText;


/***/ }),

/***/ 7892:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var SecondaryText_module_scss_1 = __importDefault(__webpack_require__(2107));
var SecondaryText = react_1.default.memo(function SecondaryText(_a) {
    var children = _a.children, _b = _a.styles, styles = _b === void 0 ? {} : _b;
    return (react_1.default.createElement("div", { className: SecondaryText_module_scss_1.default.SecondaryText, style: styles }, children));
});
exports.default = SecondaryText;


/***/ }),

/***/ 5224:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yMax = exports.yMin = exports.xMax = exports.xMin = void 0;
var xMin = 0;
exports.xMin = xMin;
var xMax = 15;
exports.xMax = xMax;
var yMin = 0;
exports.yMin = yMin;
var yMax = 5;
exports.yMax = yMax;


/***/ }),

/***/ 8321:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = {
    breakpoints: {
        md: 780,
    },
    colors: {
        gray: '#53575f',
        black: '#1e2120',
        lighterGray: '#59635f',
        lightGray: '#878c8a',
        darkGrey: '#333437',
        success: '#1f9816',
        warning: '#f6ff00',
        danger: '#ff0000',
    }
};


/***/ }),

/***/ 6161:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemCategories = void 0;
var ItemCategories;
(function (ItemCategories) {
    ItemCategories[ItemCategories["weapon_rifle"] = 0] = "weapon_rifle";
    ItemCategories[ItemCategories["weapon_pistol"] = 1] = "weapon_pistol";
    ItemCategories[ItemCategories["weapon_launcher"] = 2] = "weapon_launcher";
    ItemCategories[ItemCategories["ammo"] = 3] = "ammo";
    ItemCategories[ItemCategories["drug_light"] = 4] = "drug_light";
    ItemCategories[ItemCategories["drug_hard"] = 5] = "drug_hard";
    ItemCategories[ItemCategories["eat"] = 6] = "eat";
    ItemCategories[ItemCategories["headdress"] = 7] = "headdress";
    ItemCategories[ItemCategories["outerwear"] = 8] = "outerwear";
    ItemCategories[ItemCategories["pants"] = 9] = "pants";
    ItemCategories[ItemCategories["shoes"] = 10] = "shoes";
    ItemCategories[ItemCategories["accessories"] = 11] = "accessories";
    ItemCategories[ItemCategories["tools"] = 12] = "tools";
    ItemCategories[ItemCategories["sim_card"] = 13] = "sim_card";
    ItemCategories[ItemCategories["phone"] = 14] = "phone";
})(ItemCategories = exports.ItemCategories || (exports.ItemCategories = {}));


/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EquippedCategoriesToCells = void 0;
var types_1 = __webpack_require__(4400);
var EquippedCategoriesToCells = {
    1: types_1.ItemTypes.WEAPON_RIFLE,
    2: types_1.ItemTypes.WEAPON_PISTOL,
    3: types_1.ItemTypes.WEAPON_LAUNCHER,
    10: types_1.ItemTypes.AMMO,
    11: types_1.ItemTypes.TOOLS,
    12: types_1.ItemTypes.TOOLS,
    13: types_1.ItemTypes.TOOLS,
    20: types_1.ItemTypes.AMMO,
    21: types_1.ItemTypes.TOOLS,
    22: types_1.ItemTypes.TOOLS,
    23: types_1.ItemTypes.TOOLS,
    30: types_1.ItemTypes.AMMO,
    31: types_1.ItemTypes.TOOLS,
    32: types_1.ItemTypes.TOOLS,
    33: types_1.ItemTypes.TOOLS,
    40: types_1.ItemTypes.PHONE,
    41: types_1.ItemTypes.SIM_CARD,
    50: types_1.ItemTypes.HEADDRESS,
    51: types_1.ItemTypes.HEADDRESS,
    52: types_1.ItemTypes.HEADDRESS,
    60: types_1.ItemTypes.OUTERWEAR,
    61: types_1.ItemTypes.OUTERWEAR,
    62: types_1.ItemTypes.OUTERWEAR,
    70: types_1.ItemTypes.PANTS,
    71: types_1.ItemTypes.PANTS,
    72: types_1.ItemTypes.PANTS,
    80: types_1.ItemTypes.SHOES,
    81: types_1.ItemTypes.SHOES,
    82: types_1.ItemTypes.SHOES,
    90: types_1.ItemTypes.ACCESSORIES,
    91: types_1.ItemTypes.ACCESSORIES,
    92: types_1.ItemTypes.ACCESSORIES,
    93: types_1.ItemTypes.ACCESSORIES,
};
exports.EquippedCategoriesToCells = EquippedCategoriesToCells;


/***/ }),

/***/ 4400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeaponItemTypes = exports.AllItemTypes = exports.ItemTypes = void 0;
var categories_1 = __webpack_require__(6161);
var ItemTypes = {
    WEAPON_RIFLE: categories_1.ItemCategories[0],
    WEAPON_PISTOL: categories_1.ItemCategories[1],
    WEAPON_LAUNCHER: categories_1.ItemCategories[2],
    AMMO: categories_1.ItemCategories[3],
    DRUG_LIGHT: categories_1.ItemCategories[4],
    DRUG_HARD: categories_1.ItemCategories[5],
    EAT: categories_1.ItemCategories[6],
    HEADDRESS: categories_1.ItemCategories[7],
    OUTERWEAR: categories_1.ItemCategories[8],
    PANTS: categories_1.ItemCategories[9],
    SHOES: categories_1.ItemCategories[10],
    ACCESSORIES: categories_1.ItemCategories[11],
    TOOLS: categories_1.ItemCategories[12],
    SIM_CARD: categories_1.ItemCategories[13],
    PHONE: categories_1.ItemCategories[14]
};
exports.ItemTypes = ItemTypes;
var AllItemTypes = [];
exports.AllItemTypes = AllItemTypes;
for (var propName in ItemTypes) {
    AllItemTypes.push(ItemTypes[propName]);
}
var WeaponItemTypes = [categories_1.ItemCategories[0], categories_1.ItemCategories[1], categories_1.ItemCategories[2]];
exports.WeaponItemTypes = WeaponItemTypes;


/***/ }),

/***/ 8378:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var BoardSquare_1 = __importDefault(__webpack_require__(7100));
var boardDimensions_1 = __webpack_require__(5224);
var react_redux_1 = __webpack_require__(6213);
var SquareCommonItem_1 = __importDefault(__webpack_require__(8363));
var Board_1 = __importDefault(__webpack_require__(1082));
var AppBoard_module_scss_1 = __importDefault(__webpack_require__(2093));
var BoardInfo_1 = __importDefault(__webpack_require__(7356));
var ExternalBoard_1 = __importDefault(__webpack_require__(3176));
var BackDrop_1 = __importDefault(__webpack_require__(1226));
var ExternalBoardSquare_1 = __importDefault(__webpack_require__(5446));
var ExternalSquareCommonItem_1 = __importDefault(__webpack_require__(9655));
var AppBoard = react_1.default.memo(function AppBoard(_a) {
    var mouseOverHandler = _a.onMouseOver;
    var squares = [];
    var externalInventorySquares = [];
    var _b = react_redux_1.useSelector(function (state) { return state; }), boardItems = _b.board.board, _c = _b.draggedItem, allHoveredSquares = _c.allHoveredSquares, hoveredArea = _c.hoveredArea, externalBoardItems = _b.externalBoard.externalBoard;
    var renderSquare = function (y, x) {
        if (!boardItems) {
            return null;
        }
        var squareContent = null;
        var item = boardItems[y][x];
        if (item && item.mainCell[0] === x && item.mainCell[1] === y) {
            squareContent = react_1.default.createElement(SquareCommonItem_1.default, { coords: [x, y], item: item });
        }
        var isHovered = hoveredArea === 1 && allHoveredSquares.findIndex(function (sq) { return sq[0] === x && sq[1] === y; }) !== -1;
        return (react_1.default.createElement(BoardSquare_1.default, { key: x * 30 + y, coords: [x, y], isHovered: isHovered, isPartOfItem: Boolean(item) }, squareContent));
    };
    for (var y = boardDimensions_1.yMin; y <= boardDimensions_1.yMax; y++) {
        for (var x = boardDimensions_1.xMin; x <= boardDimensions_1.xMax; x++) {
            squares.push(renderSquare(y, x));
        }
    }
    var isShowExternalBoard = externalBoardItems.length > 0;
    if (isShowExternalBoard) {
        var renderExternalInventorySquare = function (y, x) {
            if (!externalBoardItems) {
                return null;
            }
            var squareContent = null;
            var item = externalBoardItems[y][x];
            if (item && item.mainCell[0] === x && item.mainCell[1] === y) {
                squareContent = react_1.default.createElement(ExternalSquareCommonItem_1.default, { coords: [x, y], item: item });
            }
            var isHovered = hoveredArea === 2 && allHoveredSquares.findIndex(function (sq) { return sq[0] === x && sq[1] === y; }) !== -1;
            return (react_1.default.createElement(ExternalBoardSquare_1.default, { key: x * 30 + y, coords: [x, y], isHovered: isHovered, isPartOfItem: Boolean(item) }, squareContent));
        };
        for (var y = 0; y < externalBoardItems.length; y++) {
            for (var x = 0; x <= boardDimensions_1.xMax; x++) {
                externalInventorySquares.push(renderExternalInventorySquare(y, x));
            }
        }
    }
    var topBackdropStyles = {
        flexGrow: isShowExternalBoard ? 1 : 0,
        height: isShowExternalBoard ? 'auto' : '15%',
    };
    return (react_1.default.createElement("div", { className: AppBoard_module_scss_1.default.AppBoard, onMouseOver: mouseOverHandler },
        react_1.default.createElement("div", { style: topBackdropStyles },
            react_1.default.createElement(BackDrop_1.default, null)),
        isShowExternalBoard && (react_1.default.createElement(ExternalBoard_1.default, { rowsCount: externalBoardItems.length }, externalInventorySquares)),
        react_1.default.createElement(Board_1.default, null, squares),
        react_1.default.createElement(BoardInfo_1.default, { cash: '50.000' }),
        react_1.default.createElement("div", { style: { flexGrow: 1 } },
            react_1.default.createElement(BackDrop_1.default, null))));
});
exports.default = AppBoard;


/***/ }),

/***/ 7100:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var Overlay_1 = __importDefault(__webpack_require__(6245));
var draggedItem_1 = __webpack_require__(9580);
var BoardSquare_module_scss_1 = __importDefault(__webpack_require__(2652));
var theme_1 = __importDefault(__webpack_require__(8321));
var BoardSquare = react_1.default.memo(function BoardSquare(_a) {
    var _b = __read(_a.coords, 2), x = _b[0], y = _b[1], children = _a.children, isHovered = _a.isHovered, isPartOfItem = _a.isPartOfItem;
    var _c = react_redux_1.useSelector(function (state) { return state; }).draggedItem, hoveredSquare = _c.hoveredSquare, canDropRedux = _c.canDrop, draggedItem = _c.item, hoveredArea = _c.hoveredArea;
    var draggedItemRef = react_1.useRef();
    draggedItemRef.current = draggedItem;
    var dispatch = react_redux_1.useDispatch();
    var drop = null;
    var squareMouseOverHandler = function () {
        if (draggedItemRef.current) {
            if (hoveredArea !== 1 || !hoveredSquare || typeof hoveredSquare !== 'object' || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
                dispatch(draggedItem_1.setHoveredSquares([x, y], 1));
            }
        }
    };
    var boardSquareStyles = {
        outline: "0.25px solid rgba(109, 114, 125, 0.8)"
    };
    var mouseOverElStyles = {
        pointerEvents: (hoveredArea === 1 && hoveredSquare && typeof hoveredSquare === 'object'
            && (hoveredSquare[0] === x && hoveredSquare[1] === y)) ? 'none' : 'auto',
        zIndex: 'auto',
    };
    if (isPartOfItem) {
        boardSquareStyles = __assign(__assign({}, boardSquareStyles), { outline: 'none' });
    }
    if (draggedItem) {
        mouseOverElStyles = __assign(__assign({}, mouseOverElStyles), { zIndex: 200 });
        if (isHovered) {
            boardSquareStyles = __assign(__assign({}, boardSquareStyles), { outline: "0.25px solid rgba(109, 114, 125, 0.8)" });
        }
    }
    return (react_1.default.createElement("div", { ref: drop, className: BoardSquare_module_scss_1.default.BoardSquare, style: boardSquareStyles, onMouseUp: function () { if (draggedItem)
            draggedItem_1.invokeOnMouseUp(); }, onClick: function (e) { return e.stopPropagation(); } },
        children,
        isHovered && !canDropRedux && react_1.default.createElement(Overlay_1.default, { color: theme_1.default.colors.danger }),
        isHovered && canDropRedux && react_1.default.createElement(Overlay_1.default, { color: theme_1.default.colors.success }),
        react_1.default.createElement("div", { className: BoardSquare_module_scss_1.default.MouseOverEl, style: mouseOverElStyles, onMouseOver: squareMouseOverHandler })));
});
exports.default = BoardSquare;


/***/ }),

/***/ 5446:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var Overlay_1 = __importDefault(__webpack_require__(6245));
var draggedItem_1 = __webpack_require__(9580);
var BoardSquare_module_scss_1 = __importDefault(__webpack_require__(2652));
var theme_1 = __importDefault(__webpack_require__(8321));
var hoveredItem_1 = __webpack_require__(530);
var ExternalBoardSquare = react_1.default.memo(function ExternalBoardSquare(_a) {
    var _b = __read(_a.coords, 2), x = _b[0], y = _b[1], children = _a.children, isHovered = _a.isHovered, isPartOfItem = _a.isPartOfItem;
    var _c = react_redux_1.useSelector(function (state) { return state; }), _d = _c.draggedItem, hoveredSquare = _d.hoveredSquare, canDropRedux = _d.canDrop, draggedItem = _d.item, hoveredArea = _d.hoveredArea, hoveredItem = _c.hoveredItem.item;
    var draggedItemRef = react_1.useRef();
    draggedItemRef.current = draggedItem;
    var dispatch = react_redux_1.useDispatch();
    var drop = null;
    var squareMouseOverHandler = function () {
        if (draggedItemRef.current) {
            if (hoveredArea !== 2 || !hoveredSquare || typeof hoveredSquare !== 'object' || hoveredSquare[0] !== x || hoveredSquare[1] !== y) {
                dispatch(draggedItem_1.setHoveredSquares([x, y], 2));
            }
        }
        else if (hoveredItem) {
            dispatch(hoveredItem_1.removeHoveredItem());
        }
    };
    var boardSquareStyles = {
        outline: "0.25px solid rgba(109, 114, 125, 0.8)"
    };
    var mouseOverElStyles = {
        pointerEvents: (hoveredArea === 2 && hoveredSquare && typeof hoveredSquare === 'object'
            && (hoveredSquare[0] === x && hoveredSquare[1] === y)) ? 'none' : 'auto',
    };
    if (isPartOfItem) {
        boardSquareStyles = __assign(__assign({}, boardSquareStyles), { outline: 'none' });
    }
    if (draggedItem) {
        mouseOverElStyles = __assign(__assign({}, mouseOverElStyles), { zIndex: 200 });
        if (isHovered) {
            boardSquareStyles = __assign(__assign({}, boardSquareStyles), { outline: "0.25px solid rgba(109, 114, 125, 0.8)" });
        }
    }
    return (react_1.default.createElement("div", { ref: drop, className: BoardSquare_module_scss_1.default.BoardSquare, style: boardSquareStyles, onMouseUp: function () { if (draggedItem)
            draggedItem_1.invokeOnMouseUp(); } },
        children,
        isHovered && !canDropRedux && react_1.default.createElement(Overlay_1.default, { color: theme_1.default.colors.danger }),
        isHovered && canDropRedux && react_1.default.createElement(Overlay_1.default, { color: theme_1.default.colors.success }),
        react_1.default.createElement("div", { className: BoardSquare_module_scss_1.default.MouseOverEl, style: mouseOverElStyles, onMouseOver: squareMouseOverHandler })));
});
exports.default = ExternalBoardSquare;


/***/ }),

/***/ 9655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var draggedItem_1 = __webpack_require__(9580);
var CommonItem_1 = __importDefault(__webpack_require__(5403));
var SquareCommonItem_module_scss_1 = __importDefault(__webpack_require__(9117));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var contextMenu_1 = __webpack_require__(1123);
var hoveredItem_1 = __webpack_require__(530);
var ExternalSquareCommonItem = react_1.default.memo(function SquareCommonItem(_a) {
    var _b = __read(_a.coords, 2), x = _b[0], y = _b[1], item = _a.item;
    var _c = __read(react_1.useState(), 2), imageWidth = _c[0], setImageWidth = _c[1];
    var _d = __read(react_1.useState(), 2), imageHeight = _d[0], setImageHeight = _d[1];
    var _e = react_redux_1.useSelector(function (state) { return state; }), boardSquareSize = _e.board.boardSquareSize, _f = _e.draggedItem, canDrop = _f.canDrop, hoveredSquare = _f.hoveredSquare, draggedItem = _f.item, xDown = _f.xDown, yDown = _f.yDown, goingToDrop = _f.goingToDrop, goingToStack = _f.goingToStack, _g = _e.hoveredItem, hoveredItem = _g.item, hoveredItemArea = _g.hoveredArea;
    var canDropRef = react_1.useRef();
    var hoveredSquareRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    var xDownRef = react_1.useRef();
    var yDownRef = react_1.useRef();
    var goingToDropRef = react_1.useRef();
    var goingToStackRef = react_1.useRef();
    canDropRef.current = canDrop;
    hoveredSquareRef.current = hoveredSquare;
    draggedItemRef.current = draggedItem;
    xDownRef.current = xDown;
    yDownRef.current = yDown;
    goingToDropRef.current = goingToDrop;
    goingToStackRef.current = goingToStack;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (boardSquareSize) {
            setImageWidth(item.width * boardSquareSize);
            setImageHeight(item.height * boardSquareSize);
        }
    }, [boardSquareSize]);
    var imageElement = null;
    var handleContextMenuOpen = function (e) {
        var rect = e.target.getBoundingClientRect();
        dispatch(contextMenu_1.openContextMenu(item, rect, 2));
    };
    var handleMouseDown = function (event) {
        if (event.button !== 0)
            return;
        event.stopPropagation();
        dispatch(draggedItem_1.addDraggedItem(__assign({}, item), [x, y], null, null, null, true));
        var newClone = event.currentTarget.cloneNode(true);
        newClone.addEventListener('dragstart', function (e) {
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
        newClone.style.outline = 'none';
        newClone.style.backgroundColor = 'transparent';
        newClone.style.zIndex = 150;
        newClone.id = 'curr-dragged-item';
        document.body.append(newClone);
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
            newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
            newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
        }
        var onMouseMove = function (event) {
            event.stopPropagation();
            moveAt(event.pageX, event.pageY);
        };
        document.addEventListener('mousemove', onMouseMove);
        newClone.onmouseover = function (e) {
            e.stopPropagation();
        };
        newClone.onmouseup = function () {
            event.stopPropagation();
            document.body.removeChild(newClone);
            document.removeEventListener('mousemove', onMouseMove);
            newClone.onmouseup = null;
            dispatch(draggedItem_1.dragEndHandler());
        };
    };
    var handleMouseOver = function (e) {
        e.stopPropagation();
        if (!draggedItem && (!hoveredItem || hoveredItemArea !== 2 || hoveredItem.mainCell !== item.mainCell)) {
            dispatch(hoveredItem_1.addHoveredItem(item, 2));
        }
    };
    if (x === item.mainCell[0] && y === item.mainCell[1]) {
        var currentCountText = null;
        if (item.currentCount > 1) {
            currentCountText =
                (react_1.default.createElement("div", { className: SquareCommonItem_module_scss_1.default.CurrentCountText },
                    react_1.default.createElement(SecondaryText_1.default, null, item.currentCount)));
        }
        var isItemHovered = hoveredItem && hoveredItemArea === 2 && hoveredItem.mainCell === item.mainCell;
        var imageContainerStyles = {
            width: imageWidth,
            height: imageHeight,
            top: imageHeight && imageWidth && item.isRotated ? -(imageHeight / 2 - imageWidth / 2) : 0,
            left: imageHeight && imageWidth && item.isRotated ? -(imageWidth / 2 - imageHeight / 2) : 0,
            pointerEvents: draggedItem ? 'none' : 'inherit',
            zIndex: draggedItem ? 0 : 100,
            transform: item.isRotated ? 'rotate3d(0,0,1,90deg)' : 'none',
            backgroundColor: isItemHovered ? 'rgba(151, 159, 161, 0.5)' : 'transparent',
        };
        imageElement = (react_1.default.createElement("div", { className: SquareCommonItem_module_scss_1.default.ImageContainer, style: imageContainerStyles, id: "external-square-common-item-" + x + "-" + y, onMouseDown: handleMouseDown, onContextMenu: handleContextMenuOpen, onMouseOver: handleMouseOver },
            react_1.default.createElement("img", { src: item.imageUrl, style: item.isWeaponEquipped ? { opacity: '0.5' } : null, className: SquareCommonItem_module_scss_1.default.Image }),
            currentCountText));
    }
    return (react_1.default.createElement(CommonItem_1.default, null, imageElement));
});
exports.default = ExternalSquareCommonItem;


/***/ }),

/***/ 8363:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var draggedItem_1 = __webpack_require__(9580);
var CommonItem_1 = __importDefault(__webpack_require__(5403));
var SquareCommonItem_module_scss_1 = __importDefault(__webpack_require__(9117));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var contextMenu_1 = __webpack_require__(1123);
var hoveredItem_1 = __webpack_require__(530);
var SquareCommonItem = react_1.default.memo(function SquareCommonItem(_a) {
    var _b = __read(_a.coords, 2), x = _b[0], y = _b[1], item = _a.item;
    var _c = __read(react_1.useState(), 2), imageWidth = _c[0], setImageWidth = _c[1];
    var _d = __read(react_1.useState(), 2), imageHeight = _d[0], setImageHeight = _d[1];
    var _e = react_redux_1.useSelector(function (state) { return state; }), boardSquareSize = _e.board.boardSquareSize, _f = _e.draggedItem, canDrop = _f.canDrop, hoveredSquare = _f.hoveredSquare, draggedItem = _f.item, xDown = _f.xDown, yDown = _f.yDown, goingToDrop = _f.goingToDrop, goingToStack = _f.goingToStack, _g = _e.hoveredItem, hoveredItem = _g.item, hoveredItemArea = _g.hoveredArea;
    var canDropRef = react_1.useRef();
    var hoveredSquareRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    var xDownRef = react_1.useRef();
    var yDownRef = react_1.useRef();
    var goingToDropRef = react_1.useRef();
    var goingToStackRef = react_1.useRef();
    canDropRef.current = canDrop;
    hoveredSquareRef.current = hoveredSquare;
    draggedItemRef.current = draggedItem;
    xDownRef.current = xDown;
    yDownRef.current = yDown;
    goingToDropRef.current = goingToDrop;
    goingToStackRef.current = goingToStack;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (boardSquareSize) {
            setImageWidth(item.width * boardSquareSize);
            setImageHeight(item.height * boardSquareSize);
        }
    }, [boardSquareSize]);
    var imageElement = null;
    var handleContextMenuOpen = function (e) {
        var rect = e.target.getBoundingClientRect();
        dispatch(contextMenu_1.openContextMenu(item, rect, 1));
    };
    var handleMouseDown = function (event) {
        if (event.button !== 0)
            return;
        event.stopPropagation();
        dispatch(draggedItem_1.addDraggedItem(__assign({}, item), [x, y]));
        var newClone = event.currentTarget.cloneNode(true);
        newClone.addEventListener('dragstart', function (e) {
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
        newClone.style.outline = 'none';
        newClone.style.backgroundColor = 'transparent';
        newClone.style.zIndex = 150;
        newClone.id = 'curr-dragged-item';
        document.body.append(newClone);
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
            newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
            newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
        }
        var onMouseMove = function (event) {
            event.stopPropagation();
            moveAt(event.pageX, event.pageY);
        };
        document.addEventListener('mousemove', onMouseMove);
        newClone.onmouseover = function (e) {
            e.stopPropagation();
        };
        newClone.onmouseup = function () {
            event.stopPropagation();
            document.body.removeChild(newClone);
            document.removeEventListener('mousemove', onMouseMove);
            newClone.onmouseup = null;
            dispatch(draggedItem_1.dragEndHandler());
        };
    };
    var handleMouseOver = function (e) {
        e.stopPropagation();
        if (!draggedItem && (!hoveredItem || hoveredItemArea === 1 || hoveredItem.mainCell !== item.mainCell)) {
            dispatch(hoveredItem_1.addHoveredItem(item, 1));
        }
    };
    if (x === item.mainCell[0] && y === item.mainCell[1]) {
        var currentCountText = null;
        if (item.currentCount > 1) {
            currentCountText =
                (react_1.default.createElement("div", { className: SquareCommonItem_module_scss_1.default.CurrentCountText },
                    react_1.default.createElement(SecondaryText_1.default, null, item.currentCount)));
        }
        var isItemHovered = hoveredItem && hoveredItemArea === 1 && hoveredItem.mainCell === item.mainCell;
        var imageContainerStyles = {
            width: imageWidth,
            height: imageHeight,
            top: imageHeight && imageWidth && item.isRotated ? -(imageHeight / 2 - imageWidth / 2) : 0,
            left: imageHeight && imageWidth && item.isRotated ? -(imageWidth / 2 - imageHeight / 2) : 0,
            pointerEvents: draggedItem ? 'none' : 'inherit',
            zIndex: draggedItem ? 'auto' : 100,
            transform: item.isRotated ? 'rotate3d(0,0,1,90deg)' : 'none',
            backgroundColor: isItemHovered ? 'rgba(151, 159, 161, 0.5)' : 'transparent',
        };
        imageElement = (react_1.default.createElement("div", { className: SquareCommonItem_module_scss_1.default.ImageContainer, style: imageContainerStyles, id: "square-common-item-" + x + "-" + y, onMouseDown: handleMouseDown, onContextMenu: handleContextMenuOpen, onMouseOver: handleMouseOver },
            react_1.default.createElement("img", { src: item.imageUrl, style: item.isWeaponEquipped ? { opacity: '0.5' } : null, className: SquareCommonItem_module_scss_1.default.Image }),
            currentCountText));
    }
    return (react_1.default.createElement(CommonItem_1.default, null, imageElement));
});
exports.default = SquareCommonItem;


/***/ }),

/***/ 9769:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var ClosingTypeContainer_module_scss_1 = __importDefault(__webpack_require__(1157));
var AccessoriesTypeContainer_module_scss_1 = __importDefault(__webpack_require__(4575));
var Octagon_1 = __importDefault(__webpack_require__(696));
var ClosingWeaponSquare_1 = __importDefault(__webpack_require__(5823));
var LeadText_1 = __importDefault(__webpack_require__(6965));
var SquareEquippedItem_1 = __importDefault(__webpack_require__(568));
var AccessoriesTypeContainer = react_1.default.memo(function AccessoriesTypeContainer(_a) {
    var typeTitle = _a.typeTitle, typeImage = _a.typeImage, cells = _a.cells;
    var squaresContent = cells.map(function (_a) {
        var id = _a.id, cell = _a.cell;
        var squareContent = null;
        if (cell.item) {
            squareContent = react_1.default.createElement(SquareEquippedItem_1.default, { item: cell.item });
        }
        return (react_1.default.createElement("div", { key: id, style: { width: '19.8%', position: 'relative' } },
            react_1.default.createElement(Octagon_1.default, { coords: id },
                react_1.default.createElement(ClosingWeaponSquare_1.default, { coords: id }, squareContent))));
    });
    return (react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.ClosingTypeContainer },
        react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.TitleContainer },
            react_1.default.createElement("img", { src: typeImage }),
            react_1.default.createElement(LeadText_1.default, null,
                "\u00A0",
                typeTitle.toUpperCase())),
        react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.Borders }),
        react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.SquaresContainer },
            react_1.default.createElement("div", { className: AccessoriesTypeContainer_module_scss_1.default.SquaresWrapper },
                squaresContent,
                react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.Arrow })))));
});
exports.default = AccessoriesTypeContainer;


/***/ }),

/***/ 2020:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var ClosingTypeContainer_module_scss_1 = __importDefault(__webpack_require__(1157));
var ClosingWeaponSquare_1 = __importDefault(__webpack_require__(5823));
var Octagon_1 = __importDefault(__webpack_require__(696));
var LeadText_1 = __importDefault(__webpack_require__(6965));
var SquareEquippedItem_1 = __importDefault(__webpack_require__(568));
var ClosingTypeContainer = react_1.default.memo(function ClosingTypeContainer(_a) {
    var typeTitle = _a.typeTitle, typeImage = _a.typeImage, cells = _a.cells;
    var squaresContent = cells.map(function (_a) {
        var id = _a.id, cell = _a.cell;
        var squareContent = null;
        if (cell.item) {
            squareContent = react_1.default.createElement(SquareEquippedItem_1.default, { item: cell.item });
        }
        return (react_1.default.createElement("div", { key: id, style: { width: '26%', position: 'relative' } },
            react_1.default.createElement(Octagon_1.default, { coords: id },
                react_1.default.createElement(ClosingWeaponSquare_1.default, { coords: id }, squareContent))));
    });
    return (react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.ClosingTypeContainer },
        react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.TitleContainer },
            react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.ImageContainer },
                react_1.default.createElement("img", { src: typeImage })),
            react_1.default.createElement(LeadText_1.default, null,
                "\u00A0",
                typeTitle.toUpperCase())),
        react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.Borders }),
        react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.SquaresContainer },
            squaresContent,
            react_1.default.createElement("div", { className: ClosingTypeContainer_module_scss_1.default.Arrow }))));
});
exports.default = ClosingTypeContainer;


/***/ }),

/***/ 302:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var EquippedClosingInventoryContainer_module_scss_1 = __importDefault(__webpack_require__(6803));
var AccessoriesTypeContainer_1 = __importDefault(__webpack_require__(9769));
var ClosingTypeContainer_1 = __importDefault(__webpack_require__(2020));
var cap_png_1 = __importDefault(__webpack_require__(1630));
var hoodie_png_1 = __importDefault(__webpack_require__(8673));
var pants_png_1 = __importDefault(__webpack_require__(4204));
var boots_png_1 = __importDefault(__webpack_require__(675));
var glasses_png_1 = __importDefault(__webpack_require__(2562));
var UniqueServerDescription_1 = __importDefault(__webpack_require__(6341));
var draggedItem_1 = __webpack_require__(9580);
var EquippedClosingInventoryContainer = react_1.default.memo(function EquippedClosingInventoryContainer(_a) {
    var mouseOverHandler = _a.onMouseOver;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state; }), equippedCells = _b.equippedItems.cells, _c = _b.draggedItem, goingToDrop = _c.goingToDrop, hoveredSquare = _c.hoveredSquare, draggedItem = _c.item;
    var headdressCells = [
        { id: 50, cell: equippedCells[50] },
        { id: 51, cell: equippedCells[51] },
        { id: 52, cell: equippedCells[52] },
    ];
    var outerwearCells = [
        { id: 60, cell: equippedCells[60] },
        { id: 61, cell: equippedCells[61] },
        { id: 62, cell: equippedCells[62] },
    ];
    var pantsCells = [
        { id: 70, cell: equippedCells[70] },
        { id: 71, cell: equippedCells[71] },
        { id: 72, cell: equippedCells[72] },
    ];
    var shoesCells = [
        { id: 80, cell: equippedCells[80] },
        { id: 81, cell: equippedCells[81] },
        { id: 82, cell: equippedCells[82] },
    ];
    var accessoriesCells = [
        { id: 90, cell: equippedCells[90] },
        { id: 91, cell: equippedCells[91] },
        { id: 92, cell: equippedCells[92] },
        { id: 93, cell: equippedCells[92] },
    ];
    var equippedContainerMouseOverHandler = function (e) {
        if (draggedItem)
            dispatch(draggedItem_1.setGoingToDrop(true, 0));
        mouseOverHandler();
    };
    var goingToDropOnThisSquare = goingToDrop && goingToDrop.areaId === 0;
    var hoveredSquareFromClosingInventory = typeof hoveredSquare === 'number' && hoveredSquare >= 50;
    var conditions_to_z_index_200 = draggedItem &&
        !goingToDropOnThisSquare &&
        !hoveredSquareFromClosingInventory;
    var equippedContainerStyles = {
        zIndex: conditions_to_z_index_200 ? 200 : 'auto',
    };
    return (react_1.default.createElement("div", { className: EquippedClosingInventoryContainer_module_scss_1.default.EquippedClosingInventoryContainer, style: equippedContainerStyles, onMouseOver: equippedContainerMouseOverHandler },
        react_1.default.createElement(ClosingTypeContainer_1.default, { typeTitle: 'Головной убор', typeImage: cap_png_1.default, cells: headdressCells }),
        react_1.default.createElement(ClosingTypeContainer_1.default, { typeTitle: 'Верхняя Одежда', typeImage: hoodie_png_1.default, cells: outerwearCells }),
        react_1.default.createElement(ClosingTypeContainer_1.default, { typeTitle: 'Низ', typeImage: pants_png_1.default, cells: pantsCells }),
        react_1.default.createElement(ClosingTypeContainer_1.default, { typeTitle: 'Обувь', typeImage: boots_png_1.default, cells: shoesCells }),
        react_1.default.createElement(AccessoriesTypeContainer_1.default, { typeTitle: 'Аксессуары', typeImage: glasses_png_1.default, cells: accessoriesCells }),
        react_1.default.createElement(UniqueServerDescription_1.default, null)));
});
exports.default = EquippedClosingInventoryContainer;


/***/ }),

/***/ 568:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(7294));
var react_redux_1 = __webpack_require__(6213);
var EquippedItem_1 = __importDefault(__webpack_require__(2410));
var SquareEquippedItem_module_scss_1 = __importDefault(__webpack_require__(7050));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var draggedItem_1 = __webpack_require__(9580);
var contextMenu_1 = __webpack_require__(1123);
var hoveredItem_1 = __webpack_require__(530);
var SquareEquippedItem = react_1.default.memo(function SquareEquippedItem(_a) {
    var item = _a.item;
    var _b = react_redux_1.useSelector(function (state) { return state; }), boardSquareSize = _b.board.boardSquareSize, _c = _b.draggedItem, canDrop = _c.canDrop, hoveredSquare = _c.hoveredSquare, draggedItem = _c.item, goingToDrop = _c.goingToDrop, goingToStack = _c.goingToStack, _d = _b.hoveredItem, hoveredItem = _d.item, hoveredItemArea = _d.hoveredArea;
    var goingToDropRef = react_1.useRef();
    var draggedItemRef = react_1.useRef();
    draggedItemRef.current = draggedItem;
    goingToDropRef.current = goingToDrop;
    var _e = __read(react_1.useState(), 2), imageWidth = _e[0], setImageWidth = _e[1];
    var _f = __read(react_1.useState(), 2), imageHeight = _f[0], setImageHeight = _f[1];
    var canDropRef = react_1.useRef();
    var hoveredSquareRef = react_1.useRef();
    var goingToStackRef = react_1.useRef();
    canDropRef.current = canDrop;
    hoveredSquareRef.current = hoveredSquare;
    goingToStackRef.current = goingToStack;
    react_1.useEffect(function () {
        if (boardSquareSize) {
            setImageWidth(item.width * boardSquareSize * 1.25);
            setImageHeight(item.height * boardSquareSize * 1.25);
        }
    }, [boardSquareSize]);
    var dispatch = react_redux_1.useDispatch();
    var handleContextMenuOpen = function (e) {
        var rect = e.target.getBoundingClientRect();
        dispatch(contextMenu_1.openContextMenu(item, rect, 3));
    };
    var handleMouseDown = function (event) {
        if (event.button !== 0)
            return;
        dispatch(draggedItem_1.addDraggedItem(__assign({}, item)));
        var newClone = event.currentTarget.cloneNode(true);
        if (item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
            newClone.childNodes[0].style.width = '80%';
            newClone.children[0].style.height = '80%';
            newClone.children[0].style.left = '10%';
            newClone.children[0].style.top = '10%';
            newClone.children[0].style.justifyContent = 'center';
            newClone.children[0].children[0].style.width = '100%';
            newClone.children[0].children[0].style.height = '100%';
        }
        newClone.style.width = imageWidth + 'px';
        newClone.style.height = imageHeight + 'px';
        newClone.addEventListener('dragstart', function (e) { e.stopPropagation(); e.preventDefault(); return false; });
        newClone.style.position = 'absolute';
        newClone.style.zIndex = 150;
        newClone.style.backgroundColor = 'transparent';
        newClone.style.background = 'transparent';
        newClone.id = 'curr-dragged-item';
        document.body.append(newClone);
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
            newClone.style.left = pageX - newClone.offsetWidth / 2 + 'px';
            newClone.style.top = pageY - newClone.offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        newClone.onmouseup = function () {
            document.body.removeChild(newClone);
            document.removeEventListener('mousemove', onMouseMove);
            newClone.onmouseup = null;
            dispatch(draggedItem_1.dragEndHandler(true));
            dispatch(draggedItem_1.draggedItemRelease());
        };
    };
    var handleMouseOver = function (e) {
        if (hoveredItem) {
            e.stopPropagation();
        }
        if (!draggedItem && (!hoveredItem || hoveredItemArea !== 3 || hoveredItem.mainCell !== item.mainCell)) {
            dispatch(hoveredItem_1.addHoveredItem(item, 3));
        }
    };
    var isItemHovered = hoveredItem && hoveredItemArea === 3 && hoveredItem.mainCell === item.mainCell;
    var additionalImageContainerStyles = {
        backgroundColor: isItemHovered ? 'rgba(151, 159, 161, 0.5)' : 'transparent',
    };
    var imageElement = (react_1.default.createElement("div", { className: SquareEquippedItem_module_scss_1.default.ImageContainer, style: additionalImageContainerStyles, id: "square-equipped-item-" + item.mainCell, onMouseDown: handleMouseDown, onContextMenu: handleContextMenuOpen, onMouseOver: handleMouseOver },
        react_1.default.createElement("img", { src: item.imageUrl, className: SquareEquippedItem_module_scss_1.default.Image, onDragStart: function (e) { e.stopPropagation(); e.preventDefault(); return false; } }),
        item.currentCount > 1 &&
            (react_1.default.createElement("div", { className: SquareEquippedItem_module_scss_1.default.CurrentCount },
                react_1.default.createElement(SecondaryText_1.default, null, item.currentCount)))));
    if (item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3) {
        var imageStyles = {
            top: '1%',
            right: '1%',
            height: '98%',
            width: '60%',
            pointerEvents: 'none',
        };
        var additionalImageContainerStyles_1 = {
            background: isItemHovered ? 'linear-gradient(90deg, transparent, rgba(151, 159, 161, 0.5))' : 'transparent',
            clipPath: "polygon(0% 10.56792%, 77.45% 10.56792%, 81.0447% 0%, 100% 0%,\n      100% 100%, 81.0447% 100%, 77.45% 89.43208%, 0% 89.43208%)"
        };
        imageElement = (react_1.default.createElement("div", { id: "square-equipped-item-" + item.mainCell, style: __assign({ width: '100%', height: '100%' }, additionalImageContainerStyles_1), onMouseDown: handleMouseDown, onMouseOver: handleMouseOver },
            react_1.default.createElement("div", { className: SquareEquippedItem_module_scss_1.default.ClosingSquareWrapper, onContextMenu: handleContextMenuOpen },
                react_1.default.createElement("img", { src: item.imageUrl, className: SquareEquippedItem_module_scss_1.default.Image, style: imageStyles, onDragStart: function (e) { e.stopPropagation(); e.preventDefault(); return false; } }),
                item.currentCount > 1 &&
                    (react_1.default.createElement("div", { className: SquareEquippedItem_module_scss_1.default.CurrentCount },
                        react_1.default.createElement(SecondaryText_1.default, null, item.currentCount))))));
    }
    return (react_1.default.createElement(EquippedItem_1.default, null, item.imageUrl && imageElement));
});
exports.default = SquareEquippedItem;


/***/ }),

/***/ 5389:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var EquippedWeaponsInventoryContainer_module_scss_1 = __importDefault(__webpack_require__(1165));
var WeaponTypeContainer_1 = __importDefault(__webpack_require__(5878));
var PhoneAndSimContainer_1 = __importDefault(__webpack_require__(2378));
var react_redux_1 = __webpack_require__(6213);
var types_1 = __webpack_require__(4400);
var draggedItem_1 = __webpack_require__(9580);
var EquippedWeaponsInventoryContainer = react_1.default.memo(function EquippedWeaponsInventoryContainer(_a) {
    var mouseOverHandler = _a.onMouseOver;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state; }), equippedCells = _b.equippedItems.cells, _c = _b.draggedItem, goingToDrop = _c.goingToDrop, hoveredSquare = _c.hoveredSquare, draggedItem = _c.item;
    var primaryWeaponAcceptedTypes = {
        mainSquareType: types_1.ItemTypes.WEAPON_RIFLE,
        ammoType: types_1.ItemTypes.AMMO,
        toolsType: types_1.ItemTypes.TOOLS,
    };
    var pistolAcceptedTypes = {
        mainSquareType: types_1.ItemTypes.WEAPON_PISTOL,
        ammoType: types_1.ItemTypes.AMMO,
        toolsType: types_1.ItemTypes.TOOLS,
    };
    var heavyWeaponAcceptedTypes = {
        mainSquareType: types_1.ItemTypes.WEAPON_LAUNCHER,
        ammoType: types_1.ItemTypes.AMMO,
        toolsType: types_1.ItemTypes.TOOLS,
    };
    var getCell = function (id) { return ({ id: id, cell: equippedCells[id] }); };
    var primaryWeaponCells = {
        weaponCell: getCell(1),
        ammoCell: getCell(10),
        toolsCells: [getCell(11), getCell(12), getCell(13)]
    };
    var secondaryWeaponCells = {
        weaponCell: getCell(2),
        ammoCell: getCell(20),
        toolsCells: [getCell(21), getCell(22), getCell(23)]
    };
    var heavyWeaponCells = {
        weaponCell: getCell(3),
        ammoCell: getCell(30),
        toolsCells: [getCell(31), getCell(32), getCell(33)]
    };
    var phoneCell = { id: 40, cell: equippedCells[40] };
    var simCell = { id: 41, cell: equippedCells[41] };
    var goingToDropOnThisSquare = goingToDrop && goingToDrop.areaId === 0;
    var hoveredSquareFromClosingInventory = typeof hoveredSquare === 'number' && hoveredSquare < 50;
    var conditions_to_z_index_200 = draggedItem &&
        !goingToDropOnThisSquare &&
        !hoveredSquareFromClosingInventory;
    var equippedContainerMouseOverHandler = function (e) {
        if (draggedItem)
            dispatch(draggedItem_1.setGoingToDrop(true, 0));
        mouseOverHandler();
    };
    var equippedContainerStyles = {
        zIndex: conditions_to_z_index_200 ? 200 : 'auto',
    };
    return (react_1.default.createElement("div", { className: EquippedWeaponsInventoryContainer_module_scss_1.default.EquippedWeaponsInventoryContainer, style: equippedContainerStyles, onMouseOver: equippedContainerMouseOverHandler },
        react_1.default.createElement(WeaponTypeContainer_1.default, { typeTitle: 'Основное Оружие', cells: primaryWeaponCells }),
        react_1.default.createElement(WeaponTypeContainer_1.default, { typeTitle: 'Пистолет', cells: secondaryWeaponCells }),
        react_1.default.createElement(WeaponTypeContainer_1.default, { typeTitle: 'Тяжелое Оружие', cells: heavyWeaponCells }),
        react_1.default.createElement(PhoneAndSimContainer_1.default, { phoneType: types_1.ItemTypes.PHONE, simType: types_1.ItemTypes.SIM_CARD, phoneCell: phoneCell, simCell: simCell })));
});
exports.default = EquippedWeaponsInventoryContainer;


/***/ }),

/***/ 2378:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var PhoneAndSimContainer_module_scss_1 = __importDefault(__webpack_require__(3575));
var WeaponTypeContainer_module_scss_1 = __importDefault(__webpack_require__(9176));
var LeadText_1 = __importDefault(__webpack_require__(6965));
var ClosingWeaponSquare_1 = __importDefault(__webpack_require__(5823));
var SquareEquippedItem_1 = __importDefault(__webpack_require__(568));
var PhoneAndSimContainer = react_1.default.memo(function PhoneAndSimContainer(_a) {
    var phoneType = _a.phoneType, simType = _a.simType, phoneCell = _a.phoneCell, simCell = _a.simCell;
    var phoneSquareContent = phoneCell.cell.item ?
        (react_1.default.createElement(SquareEquippedItem_1.default, { item: phoneCell.cell.item })) : null;
    var simSquareContent = simCell.cell.item ?
        (react_1.default.createElement(SquareEquippedItem_1.default, { item: simCell.cell.item })) : null;
    return (react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.PhoneAndSimContainer },
        react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.TypeAndWeaponTitle },
            react_1.default.createElement("div", { className: WeaponTypeContainer_module_scss_1.default.TypeTitleText },
                react_1.default.createElement(LeadText_1.default, { styles: { textAlign: 'right' } }, "\u0422\u0415\u041B\u0415\u0424\u041E\u041D \u0418 \u0421\u0418\u041C\u041A\u0410\u0420\u0422\u0410"))),
        react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.WeaponSquareContainer }),
        react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.TransparentHoverEl, onMouseOver: function (e) { return e.stopPropagation(); } },
            react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.SquaresContainer },
                react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.CirclesWrapper },
                    react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.Circle },
                        react_1.default.createElement(ClosingWeaponSquare_1.default, { coords: phoneCell.id }, phoneSquareContent)),
                    react_1.default.createElement("div", { className: PhoneAndSimContainer_module_scss_1.default.Circle },
                        react_1.default.createElement(ClosingWeaponSquare_1.default, { coords: simCell.id }, simSquareContent)))))));
});
exports.default = PhoneAndSimContainer;


/***/ }),

/***/ 5878:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(7294));
var WeaponTypeContainer_module_scss_1 = __importDefault(__webpack_require__(9176));
var Octagon_1 = __importDefault(__webpack_require__(696));
var ClosingWeaponSquare_1 = __importDefault(__webpack_require__(5823));
var LeadText_1 = __importDefault(__webpack_require__(6965));
var SecondaryText_1 = __importDefault(__webpack_require__(7892));
var SquareEquippedItem_1 = __importDefault(__webpack_require__(568));
var WeaponTypeContainer = react_1.default.memo(function WeaponTypeContainer(_a) {
    var typeTitle = _a.typeTitle, cells = _a.cells;
    var weaponCell = cells.weaponCell, ammoCell = cells.ammoCell, toolsCells = cells.toolsCells;
    var weaponSquareContent = weaponCell.cell.item ?
        (react_1.default.createElement(SquareEquippedItem_1.default, { key: weaponCell.id, item: weaponCell.cell.item })) : null;
    var ammoSquareContent = ammoCell.cell.item ?
        (react_1.default.createElement(SquareEquippedItem_1.default, { key: ammoCell.id, item: ammoCell.cell.item })) : null;
    var toolsSquares = toolsCells.map(function (toolsCell) {
        var toolsSquareContent = null;
        if (toolsCell.cell.item) {
            toolsSquareContent = (react_1.default.createElement(SquareEquippedItem_1.default, { key: toolsCell.cell.item.id, item: toolsCell.cell.item }));
        }
        return (react_1.default.createElement("div", { key: toolsCell.id, style: { width: '19.85%', position: 'relative' } },
            react_1.default.createElement(Octagon_1.default, { coords: toolsCell.id },
                react_1.default.createElement(ClosingWeaponSquare_1.default, { coords: toolsCell.id }, toolsSquareContent))));
    });
    return (react_1.default.createElement("div", { className: WeaponTypeContainer_module_scss_1.default.WeaponTypeContainer },
        react_1.default.createElement("div", { className: WeaponTypeContainer_module_scss_1.default.TypeAndWeaponTitle },
            react_1.default.createElement(LeadText_1.default, { styles: { textAlign: 'right' } }, typeTitle.toUpperCase()),
            react_1.default.createElement(SecondaryText_1.default, { styles: { textAlign: 'right' } }, weaponCell.cell.item && weaponCell.cell.item.name)),
        react_1.default.createElement("div", { className: WeaponTypeContainer_module_scss_1.default.WeaponSquareContainer, onMouseOver: function (e) { return e.stopPropagation(); } }),
        react_1.default.createElement("div", { className: WeaponTypeContainer_module_scss_1.default.TransparentHoveredEl, onMouseOver: function (e) { return e.stopPropagation(); } },
            react_1.default.createElement(ClosingWeaponSquare_1.default, { coords: weaponCell.id }, weaponSquareContent)),
        react_1.default.createElement("div", { className: WeaponTypeContainer_module_scss_1.default.AttachmentsSquaresContainer },
            react_1.default.createElement("div", { className: WeaponTypeContainer_module_scss_1.default.LeftArrow }),
            react_1.default.createElement("div", { style: { width: '19.85%', position: 'relative' } },
                react_1.default.createElement(Octagon_1.default, { coords: ammoCell.id },
                    react_1.default.createElement(ClosingWeaponSquare_1.default, { coords: ammoCell.id }, ammoSquareContent))),
            toolsSquares)));
});
exports.default = WeaponTypeContainer;


/***/ }),

/***/ 2272:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextAction = void 0;
var ContextAction = (function () {
    function ContextAction(label, handler) {
        this.label = label;
        this.handler = handler;
    }
    return ContextAction;
}());
exports.ContextAction = ContextAction;


/***/ }),

/***/ 2459:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var EquippedItemsCell = (function () {
    function EquippedItemsCell(item) {
        this.item = item;
    }
    return EquippedItemsCell;
}());
exports.default = EquippedItemsCell;


/***/ }),

/***/ 7414:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Item = (function () {
    function Item(id, name, category, mainCell, width, height, currentCount, maxCount, imageUrl, isEquipped, isRotated, rest, isWeaponEquipped) {
        if (isRotated === void 0) { isRotated = false; }
        if (isWeaponEquipped === void 0) { isWeaponEquipped = false; }
        this.id = id;
        this.name = name;
        this.category = category;
        this.mainCell = mainCell;
        this.width = width;
        this.height = height;
        this.currentCount = currentCount;
        this.maxCount = maxCount;
        this.imageUrl = imageUrl;
        this.isEquipped = isEquipped;
        this.isRotated = isRotated;
        this.rest = rest;
        this.isWeaponEquipped = isWeaponEquipped;
    }
    return Item;
}());
exports.default = Item;


/***/ }),

/***/ 2947:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importItemImage = exports.setSquareSize = exports.boardChangeCurrentCountByItemId = exports.removeItemFromBoard = exports.changeEquippedState = exports.openDoubleInventory = exports.openOrRefreshInventory = exports.removeItem = exports.addItemBySquares = exports.addItem = void 0;
var types_1 = __webpack_require__(5183);
var store_1 = __importDefault(__webpack_require__(6152));
var equippedItems_1 = __webpack_require__(1716);
var boardDimensions_1 = __webpack_require__(5224);
var Item_1 = __importDefault(__webpack_require__(7414));
var weapon_png_1 = __importDefault(__webpack_require__(1101));
var translateToServerItem_1 = __webpack_require__(3395);
var externalBoard_1 = __webpack_require__(4316);
var importItemImage = function (itemName) { return __awaiter(void 0, void 0, void 0, function () {
    var imageUrl, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, Promise.resolve().then(function () { return __importStar(__webpack_require__(4105)("./" + itemName.toLowerCase() + ".png")); })];
            case 1:
                imageUrl = _a.sent();
                return [2, imageUrl];
            case 2:
                e_1 = _a.sent();
                if (e_1.code === 'MODULE_NOT_FOUND') {
                }
                else {
                    console.log('error while importing image');
                }
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.importItemImage = importItemImage;
var _getEnabledAndBoardItems;
_getEnabledAndBoardItems = function (items) { return __awaiter(void 0, void 0, void 0, function () {
    var enabledItems, boardItems, _a, _b, _i, propName, item, Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount, MaxCount, IsRotated, rest, ID, ImageUrl, category, FullItem, tmp, mainCellY, mainCellX, filledSquares, i, j;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                enabledItems = [];
                boardItems = [];
                _a = [];
                for (_b in items)
                    _a.push(_b);
                _i = 0;
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3, 4];
                propName = _a[_i];
                item = items[propName];
                Name = item.Name, PosNumberLeftAngle = item.PosNumberLeftAngle, SizeX = item.SizeX, SizeY = item.SizeY, Enabled = item.Enabled, CurrentCount = item.CurrentCount, MaxCount = item.MaxCount, IsRotated = item.IsRotated, rest = __rest(item, ["Name", "PosNumberLeftAngle", "SizeX", "SizeY", "Enabled", "CurrentCount", "MaxCount", "IsRotated"]);
                ID = item.ID.toString();
                return [4, importItemImage(Name)];
            case 2:
                ImageUrl = _c.sent();
                if (ImageUrl) {
                    ImageUrl = ImageUrl.default;
                }
                else {
                    ImageUrl = weapon_png_1.default;
                }
                category = item.Category.toLowerCase();
                FullItem = void 0;
                if (IsRotated) {
                    tmp = SizeX;
                    SizeX = SizeY;
                    SizeY = tmp;
                }
                FullItem = new Item_1.default(ID, Name, category, PosNumberLeftAngle, SizeX, SizeY, CurrentCount, MaxCount, ImageUrl, Enabled, IsRotated, rest);
                if (Enabled === true) {
                    enabledItems.push(FullItem);
                }
                else {
                    mainCellY = Math.floor(PosNumberLeftAngle / (boardDimensions_1.xMax + 1));
                    mainCellX = PosNumberLeftAngle % (boardDimensions_1.xMax + 1) - 1;
                    filledSquares = [];
                    for (i = mainCellX; i < mainCellX + SizeX; i++) {
                        for (j = mainCellY; j < mainCellY + SizeY; j++) {
                            filledSquares.push([i, j]);
                        }
                    }
                    FullItem.mainCell = [mainCellX, mainCellY];
                    boardItems.push(__assign(__assign({}, FullItem), { squares: filledSquares }));
                }
                _c.label = 3;
            case 3:
                _i++;
                return [3, 1];
            case 4: return [2, { boardItems: boardItems, enabledItems: enabledItems }];
        }
    });
}); };
var _getExternalBoardItems;
_getExternalBoardItems = function (items) { return __awaiter(void 0, void 0, void 0, function () {
    var externalBoardItems, _a, _b, _i, propName, item, Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount, MaxCount, IsRotated, rest, ID, ImageUrl, category, FullItem, tmp, mainCellY, mainCellX, filledSquares, i, j;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                externalBoardItems = [];
                _a = [];
                for (_b in items)
                    _a.push(_b);
                _i = 0;
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3, 4];
                propName = _a[_i];
                item = items[propName];
                Name = item.Name, PosNumberLeftAngle = item.PosNumberLeftAngle, SizeX = item.SizeX, SizeY = item.SizeY, Enabled = item.Enabled, CurrentCount = item.CurrentCount, MaxCount = item.MaxCount, IsRotated = item.IsRotated, rest = __rest(item, ["Name", "PosNumberLeftAngle", "SizeX", "SizeY", "Enabled", "CurrentCount", "MaxCount", "IsRotated"]);
                ID = item.ID.toString();
                return [4, importItemImage(Name)];
            case 2:
                ImageUrl = _c.sent();
                if (ImageUrl) {
                    ImageUrl = ImageUrl.default;
                }
                else {
                    ImageUrl = weapon_png_1.default;
                }
                category = item.Category.toLowerCase();
                FullItem = void 0;
                if (IsRotated) {
                    tmp = SizeX;
                    SizeX = SizeY;
                    SizeY = tmp;
                }
                FullItem = new Item_1.default(ID, Name, category, PosNumberLeftAngle, SizeX, SizeY, CurrentCount, MaxCount, ImageUrl, Enabled, IsRotated, rest);
                mainCellY = Math.floor(PosNumberLeftAngle / (boardDimensions_1.xMax + 1));
                mainCellX = PosNumberLeftAngle % (boardDimensions_1.xMax + 1) - 1;
                filledSquares = [];
                for (i = mainCellX; i < mainCellX + SizeX; i++) {
                    for (j = mainCellY; j < mainCellY + SizeY; j++) {
                        filledSquares.push([i, j]);
                    }
                }
                FullItem.mainCell = [mainCellX, mainCellY];
                externalBoardItems.push(__assign(__assign({}, FullItem), { squares: filledSquares }));
                _c.label = 3;
            case 3:
                _i++;
                return [3, 1];
            case 4: return [2, { externalBoardItems: externalBoardItems }];
        }
    });
}); };
var openOrRefreshInventory = function (info) { return __awaiter(void 0, void 0, void 0, function () {
    var values, _a, boardItems, enabledItems;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                values = JSON.parse(info).$values;
                return [4, _getEnabledAndBoardItems(values)];
            case 1:
                _a = _b.sent(), boardItems = _a.boardItems, enabledItems = _a.enabledItems;
                store_1.default.dispatch(_addItems(boardItems));
                store_1.default.dispatch(equippedItems_1.setEquippedItems(enabledItems));
                return [2];
        }
    });
}); };
exports.openOrRefreshInventory = openOrRefreshInventory;
var openDoubleInventory = function (info) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, values, externalValues, externalBoardHeight, _b, boardItems, enabledItems, externalBoardItems;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = JSON.parse(info), values = _a.$values, externalValues = _a.$externalValues, externalBoardHeight = _a.$externalBoardHeight;
                return [4, _getEnabledAndBoardItems(values)];
            case 1:
                _b = _c.sent(), boardItems = _b.boardItems, enabledItems = _b.enabledItems;
                return [4, _getExternalBoardItems(externalValues)];
            case 2:
                externalBoardItems = (_c.sent()).externalBoardItems;
                store_1.default.dispatch(_addItems(boardItems));
                store_1.default.dispatch(equippedItems_1.setEquippedItems(enabledItems));
                store_1.default.dispatch(externalBoard_1.openExternalBoard(externalBoardItems, externalBoardHeight));
                return [2];
        }
    });
}); };
exports.openDoubleInventory = openDoubleInventory;
var _addItems = function (items) {
    return { type: types_1.SQUARES_FILL, items: items };
};
var _removeItem = function (coordsArr) {
    return { type: types_1.SQUARES_RELEASE, squares: coordsArr };
};
var _changeEquippedState = function (squares, item) {
    return { type: types_1.EQUIPPED_STATE_CHANGE, squares: squares, item: item };
};
var _releaseAllItems = function () {
    return { type: types_1.BOARD_ALL_ITEMS_RELEASE };
};
var setSquareSize = function (squareSize) {
    return { type: types_1.BOARD_SET_SQUARE_SIZE, size: squareSize };
};
exports.setSquareSize = setSquareSize;
var addItemBySquares = function (squares, item) {
    return { type: types_1.SINGLE_ITEM_SQUARES_FILL, squares: squares, item: item };
};
exports.addItemBySquares = addItemBySquares;
var addItem = function () {
    return function (dispatch, getState) {
        var _a = getState().draggedItem, hoveredSquare = _a.hoveredSquare, allHoveredSquares = _a.allHoveredSquares, xDown = _a.xDown, yDown = _a.yDown, draggedItem = _a.item;
        var newDraggedItem = __assign({}, draggedItem);
        newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];
        newDraggedItem.isEquipped = false;
        if (typeof hoveredSquare === 'number' && newDraggedItem.isWeaponEquipped) {
            newDraggedItem.isWeaponEquipped = false;
        }
        dispatch(addItemBySquares(allHoveredSquares, newDraggedItem));
        var itemToServer = translateToServerItem_1.translateToServerItem(newDraggedItem);
        mp.trigger('cef_cl_moveItem', itemToServer);
    };
};
exports.addItem = addItem;
var removeItem = function (_a, width, height) {
    var _b = __read(_a, 2), x = _b[0], y = _b[1];
    if (width === void 0) { width = 1; }
    if (height === void 0) { height = 1; }
    return function (dispatch) {
        var itemsToRemove = [];
        for (var currX = x; currX < x + width; currX++) {
            for (var currY = y; currY < y + height; currY++) {
                itemsToRemove.push([currX, currY]);
            }
        }
        dispatch(_removeItem(itemsToRemove));
    };
};
exports.removeItem = removeItem;
var removeItemFromBoard = function (id) {
    return function (dispatch, getState) {
        var board = getState().board.board;
        var squaresToRemove = [];
        for (var y = boardDimensions_1.yMin; y <= boardDimensions_1.yMax; y++) {
            for (var x = boardDimensions_1.xMin; x <= boardDimensions_1.xMax; x++) {
                if (board[y][x] && board[y][x].id === id) {
                    squaresToRemove.push([x, y]);
                }
            }
        }
        dispatch(_removeItem(squaresToRemove));
    };
};
exports.removeItemFromBoard = removeItemFromBoard;
var changeEquippedState = function (item, newState) { return function (dispatch) {
    var newItem = __assign({}, item);
    var squares = [];
    newItem.isWeaponEquipped = newState;
    for (var y = newItem.mainCell[1]; y < newItem.mainCell[1] + newItem.height; y++) {
        for (var x = newItem.mainCell[0]; x < newItem.mainCell[0] + newItem.width; x++) {
            squares.push([x, y]);
        }
    }
    dispatch(_changeEquippedState(squares, newItem));
}; };
exports.changeEquippedState = changeEquippedState;
var boardChangeCurrentCountByItemId = function (id, newCurrentCount) {
    return function (dispatch, getState) {
        var boardCells = getState().board.board;
        var requiredCells = [];
        boardCells.forEach(function (row, yPos) {
            row.forEach(function (item, xPos) {
                if (item && item.id === id) {
                    requiredCells.push([xPos, yPos]);
                }
            });
        });
        if (newCurrentCount === 0) {
            return _removeItem(requiredCells);
        }
        dispatch({ type: types_1.BOARD_CURRENT_COUNT_CHANGE, squares: requiredCells, newCurrentCount: newCurrentCount });
    };
};
exports.boardChangeCurrentCountByItemId = boardChangeCurrentCountByItemId;


/***/ }),

/***/ 1123:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContextActionsForCell = exports.closeContextMenu = exports.openContextMenu = exports.mpTriggerDropItem = void 0;
var types_1 = __webpack_require__(5183);
var translateToServerItem_1 = __webpack_require__(3395);
var types_2 = __webpack_require__(4400);
var board_1 = __webpack_require__(2947);
var equippedItems_1 = __webpack_require__(1716);
var ContextAction_1 = __webpack_require__(2272);
var store_1 = __importDefault(__webpack_require__(6152));
var externalBoard_1 = __webpack_require__(4316);
var dispatch = store_1.default.dispatch;
var _openContextMenu = function (item, hoveredArea, leftOffset, topOffset, topOffsetTopContext) {
    return { type: types_1.CONTEXT_MENU_OPEN, item: item, hoveredArea: hoveredArea, leftOffset: leftOffset, topOffset: topOffset, topOffsetTopContext: topOffsetTopContext };
};
var _openRangeComponent = function () {
    return { type: types_1.CONTEXT_MENU_SPLIT_OPEN };
};
var _closeContextMenu = function () {
    return { type: types_1.CONTEXT_MENU_CLOSE };
};
var openContextMenu = function (item, rect, hoveredArea) {
    return function (dispatch) {
        var averX, bottomContext, topContext;
        if (hoveredArea === 3) {
            averX = item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3 ? rect.left + rect.width / 3
                : rect.left - rect.width / 1.18;
            averX = Math.floor(averX);
            bottomContext = Math.floor(rect.top + rect.height * 0.935);
            topContext = Math.floor(rect.top + rect.height * 0.065);
        }
        else {
            var singleSquareWidth = rect.width / item.width;
            averX = Math.floor(rect.left + item.width * singleSquareWidth / 2) - 0.783 * singleSquareWidth;
            bottomContext = Math.floor(rect.top + rect.height * 0.935);
            topContext = Math.floor(rect.top + rect.height * 0.065);
        }
        dispatch(_openContextMenu(item, hoveredArea, averX, bottomContext, topContext));
    };
};
exports.openContextMenu = openContextMenu;
var closeContextMenu = function () {
    return function (dispatch) {
        dispatch(_closeContextMenu());
    };
};
exports.closeContextMenu = closeContextMenu;
var mpTriggerDropItem = function (item) {
    var translatedItem = translateToServerItem_1.translateToServerItem(item);
    try {
        mp.trigger('cef_cl_dropItem', translatedItem);
    }
    catch (e) { }
};
exports.mpTriggerDropItem = mpTriggerDropItem;
var _eatFoodHandler = function (item) {
    console.log('food ', item, ' was eaten');
};
var _removeBoardItemHandler = function (item) {
    var category = item.category, id = item.id, mainCell = item.mainCell;
    if (category === types_2.ItemTypes.WEAPON_RIFLE || category === types_2.ItemTypes.WEAPON_PISTOL
        || category === types_2.ItemTypes.WEAPON_LAUNCHER) {
        dispatch(equippedItems_1.removeEquippedWeaponFromEquipped(id));
    }
    dispatch(board_1.removeItem(mainCell, item.width, item.height));
};
var _removeExternalBoardItemHandler = function (item) {
    var category = item.category, id = item.id, mainCell = item.mainCell;
    dispatch(externalBoard_1.removeExternalBoardItem(mainCell, item.width, item.height));
};
var _removeEquippedItemHandler = function (item) {
    var category = item.category, id = item.id, mainCell = item.mainCell;
    if (category === types_2.ItemTypes.WEAPON_RIFLE || category === types_2.ItemTypes.WEAPON_PISTOL
        || category === types_2.ItemTypes.WEAPON_LAUNCHER) {
        dispatch(board_1.removeItemFromBoard(id));
    }
    dispatch(equippedItems_1.removeEquippedItem(mainCell));
};
var _dropItemHandler = function (removeItemFunc, item) { return function () {
    dispatch(_closeContextMenu());
    removeItemFunc(item);
}; };
var _openRangeComponentHandler = function () {
    dispatch(_openRangeComponent());
};
var getContextActionsForCell = function (item, hoveredArea) {
    var contextActions = [];
    if (item.currentCount && item.maxCount && item.currentCount > 1) {
        contextActions.push(new ContextAction_1.ContextAction('Разделить', _openRangeComponentHandler));
    }
    if (hoveredArea === 1 || hoveredArea === 2) {
        switch (item.category) {
            case types_2.ItemTypes.EAT: {
                contextActions.push(new ContextAction_1.ContextAction('Съесть', _dropItemHandler(_eatFoodHandler, item)));
            }
        }
        if (hoveredArea === 1) {
            contextActions.push(new ContextAction_1.ContextAction('Выкинуть', _dropItemHandler(_removeBoardItemHandler, item)));
        }
        else if (hoveredArea === 2) {
            contextActions.push(new ContextAction_1.ContextAction('Выкинуть', _dropItemHandler(_removeExternalBoardItemHandler, item)));
        }
    }
    else if (hoveredArea === 3) {
        contextActions.push(new ContextAction_1.ContextAction('Выкинуть', _dropItemHandler(_removeEquippedItemHandler, item)));
    }
    return contextActions;
};
exports.getContextActionsForCell = getContextActionsForCell;


/***/ }),

/***/ 9580:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rotateItemOnBoard = exports.dragEndHandler = exports.rotateItem = exports.setGoingToDrop = exports.stackItem = exports.invokeOnMouseUp = exports.setHoveredSquares = exports.draggedItemRelease = exports.addDraggedItem = void 0;
var types_1 = __webpack_require__(5183);
var boardDimensions_1 = __webpack_require__(5224);
var board_1 = __webpack_require__(2947);
var equippedItems_1 = __webpack_require__(1716);
var translateToServerItem_1 = __webpack_require__(3395);
var equippedCategoriesToCells_1 = __webpack_require__(9412);
var types_2 = __webpack_require__(4400);
var contextMenu_1 = __webpack_require__(1123);
var externalBoard_1 = __webpack_require__(4316);
var hoveredItem_1 = __webpack_require__(530);
var _addDraggedItem = function (item, xUp, xDown, yUp, yDown, draggedItemArea) {
    if (draggedItemArea === void 0) { draggedItemArea = 1; }
    return { type: types_1.DRAGGED_ITEM_SET, item: item, xUp: xUp, xDown: xDown, yUp: yUp, yDown: yDown, draggedItemArea: draggedItemArea };
};
var _setHoveredSquares = function (squareCoords, allHoveredSquares, canDrop, hoveredArea, goingToStack) {
    if (goingToStack === void 0) { goingToStack = null; }
    return {
        type: types_1.HOVERED_SQUARES_SET, square: squareCoords, squares: allHoveredSquares,
        canDrop: canDrop,
        hoveredArea: hoveredArea,
        goingToStack: goingToStack
    };
};
var _setGoingToDrop = function (newState, canDrop, areaId) {
    return { type: types_1.GOING_TO_DROP_SET, goingToDrop: newState, canDrop: canDrop, areaId: areaId };
};
var draggedItemRelease = function () {
    return { type: types_1.DRAGGED_ITEM_RELEASE };
};
exports.draggedItemRelease = draggedItemRelease;
var _getItemOffsets;
_getItemOffsets = function (itemWidth, itemHeight) {
    var xUp, xDown, yUp, yDown;
    if (itemWidth % 2 === 0) {
        xUp = itemWidth / 2;
        xDown = itemWidth / 2 - 1;
    }
    else {
        xUp = Math.floor(itemWidth / 2);
        xDown = Math.floor(itemWidth / 2);
    }
    if (itemHeight % 2 === 0) {
        yUp = itemHeight / 2;
        yDown = itemHeight / 2 - 1;
    }
    else {
        yUp = Math.floor(itemHeight / 2);
        yDown = Math.floor(itemHeight / 2);
    }
    return { xUp: xUp, xDown: xDown, yUp: yUp, yDown: yDown };
};
var addDraggedItem = function (item, _a, fromRotate, hoveredSquareIfEquippedHovered, goingToDropAreaId, fromExternalBoard) {
    var _b = __read(_a === void 0 ? [-100, -100] : _a, 2), x = _b[0], y = _b[1];
    if (fromRotate === void 0) { fromRotate = false; }
    if (hoveredSquareIfEquippedHovered === void 0) { hoveredSquareIfEquippedHovered = null; }
    if (goingToDropAreaId === void 0) { goingToDropAreaId = null; }
    if (fromExternalBoard === void 0) { fromExternalBoard = false; }
    return function (dispatch) {
        var itemWidth = item.width;
        var itemHeight = item.height;
        if (item.isRotated) {
            itemWidth = item.height;
            itemHeight = item.width;
        }
        var _a = _getItemOffsets(itemWidth, itemHeight), xUp = _a.xUp, xDown = _a.xDown, yUp = _a.yUp, yDown = _a.yDown;
        if (!item.isEquipped) {
            if (!fromExternalBoard) {
                dispatch(_addDraggedItem(__assign({}, item), xUp, xDown, yUp, yDown, 1));
            }
            else {
                dispatch(_addDraggedItem(__assign({}, item), xUp, xDown, yUp, yDown, 2));
            }
        }
        else {
            dispatch(_addDraggedItem(__assign({}, item), xUp, xDown, yUp, yDown, 3));
            if (!fromRotate) {
                dispatch(setHoveredSquares(item.mainCell, 3));
            }
        }
        if (fromRotate) {
            if (goingToDropAreaId) {
                dispatch(_setGoingToDrop(true, true, goingToDropAreaId));
            }
            else if (fromExternalBoard) {
                dispatch(setHoveredSquares([x, y], 2));
            }
            else if (!hoveredSquareIfEquippedHovered) {
                dispatch(setHoveredSquares([x, y], 1));
            }
            else if (hoveredSquareIfEquippedHovered) {
                dispatch(setHoveredSquares(hoveredSquareIfEquippedHovered, 3));
            }
        }
    };
};
exports.addDraggedItem = addDraggedItem;
var _getHoveredSquares = function (hoveredSquare, xUp, xDown, yUp, yDown) {
    var _a = __read(hoveredSquare, 2), x = _a[0], y = _a[1];
    var allHoveredSquares = [];
    for (var i = x - xDown; i <= x + xUp; i++) {
        for (var j = y - yDown; j <= y + yUp; j++) {
            allHoveredSquares.push([i, j]);
        }
    }
    return allHoveredSquares;
};
var setHoveredSquares = function (hoveredSquare, hoveredArea) {
    if (hoveredArea === void 0) { hoveredArea = 1; }
    return function (dispatch, getState) {
        var _a = getState(), _b = _a.draggedItem, xDown = _b.xDown, xUp = _b.xUp, yDown = _b.yDown, yUp = _b.yUp, item = _b.item, board = _a.board.board, externalBoard = _a.externalBoard.externalBoard, equippedCells = _a.equippedItems.cells;
        var canDrop = true;
        var stackableItem = null;
        var stackableItemNewCurrentCount = 0;
        var draggedItemNewCurrentCount = 0;
        var allHoveredSquares = [];
        if (hoveredArea === 1) {
            allHoveredSquares = _getHoveredSquares(hoveredSquare, xUp, xDown, yUp, yDown);
            allHoveredSquares.forEach(function (hoveredSquare) {
                var _a = __read(hoveredSquare, 2), hoveredX = _a[0], hoveredY = _a[1];
                if (hoveredX < boardDimensions_1.xMin || hoveredX > boardDimensions_1.xMax || hoveredY < boardDimensions_1.yMin || hoveredY > boardDimensions_1.yMax) {
                    canDrop = false;
                }
                else if (board[hoveredY][hoveredX] !== null) {
                    var boardSquare = board[hoveredY][hoveredX];
                    if (boardSquare.id !== item.id) {
                        canDrop = false;
                    }
                    var isAllowToStack = boardSquare.name === item.name
                        && boardSquare.id !== item.id
                        && boardSquare.currentCount && boardSquare.maxCount
                        && boardSquare.currentCount < boardSquare.maxCount;
                    if (isAllowToStack) {
                        stackableItem = boardSquare;
                        if (stackableItem.maxCount >= stackableItem.currentCount + item.currentCount) {
                            stackableItemNewCurrentCount = stackableItem.currentCount + item.currentCount;
                            draggedItemNewCurrentCount = 0;
                        }
                        else if (stackableItem.maxCount < stackableItem.currentCount + item.currentCount) {
                            stackableItemNewCurrentCount = stackableItem.maxCount;
                            draggedItemNewCurrentCount = item.currentCount - (stackableItem.maxCount - stackableItem.currentCount);
                        }
                    }
                }
            });
        }
        else if (hoveredArea === 3) {
            var equippedSquareItem = equippedCells[hoveredSquare].item;
            var allowedCategory = equippedCategoriesToCells_1.EquippedCategoriesToCells[hoveredSquare];
            if (allowedCategory !== item.category) {
                canDrop = false;
            }
            else if (equippedSquareItem !== null) {
                if (equippedSquareItem.id !== item.id) {
                    canDrop = false;
                }
                var isAllowToStack = equippedSquareItem.name === item.name
                    && equippedSquareItem.id !== item.id
                    && equippedSquareItem.currentCount && equippedSquareItem.maxCount
                    && equippedSquareItem.currentCount < equippedSquareItem.maxCount;
                if (isAllowToStack) {
                    stackableItem = __assign({}, equippedSquareItem);
                    if (equippedSquareItem.maxCount >= equippedSquareItem.currentCount + item.currentCount) {
                        stackableItemNewCurrentCount = equippedSquareItem.currentCount + item.currentCount;
                        draggedItemNewCurrentCount = 0;
                    }
                    else if (equippedSquareItem.maxCount < equippedSquareItem.currentCount + item.currentCount) {
                        stackableItemNewCurrentCount = equippedSquareItem.maxCount;
                        draggedItemNewCurrentCount = item.currentCount - (stackableItem.maxCount - stackableItem.currentCount);
                    }
                }
            }
        }
        else if (hoveredArea === 2) {
            allHoveredSquares = _getHoveredSquares(hoveredSquare, xUp, xDown, yUp, yDown);
            allHoveredSquares.forEach(function (hoveredSquare) {
                var _a = __read(hoveredSquare, 2), hoveredX = _a[0], hoveredY = _a[1];
                var xMin = 0;
                var yMin = 0;
                var xMax = externalBoard[0].length - 1;
                var yMax = externalBoard.length - 1;
                if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
                    canDrop = false;
                }
                else if (externalBoard[hoveredY][hoveredX] !== null) {
                    var boardSquare = externalBoard[hoveredY][hoveredX];
                    if (boardSquare.id !== item.id) {
                        canDrop = false;
                    }
                    var isAllowToStack = boardSquare.name === item.name
                        && boardSquare.id !== item.id
                        && boardSquare.currentCount && boardSquare.maxCount
                        && boardSquare.currentCount < boardSquare.maxCount;
                    if (isAllowToStack) {
                        stackableItem = boardSquare;
                        if (stackableItem.maxCount >= stackableItem.currentCount + item.currentCount) {
                            stackableItemNewCurrentCount = stackableItem.currentCount + item.currentCount;
                            draggedItemNewCurrentCount = 0;
                        }
                        else if (stackableItem.maxCount < stackableItem.currentCount + item.currentCount) {
                            stackableItemNewCurrentCount = stackableItem.maxCount;
                            draggedItemNewCurrentCount = item.currentCount - (stackableItem.maxCount - stackableItem.currentCount);
                        }
                    }
                }
            });
        }
        if (stackableItem) {
            var goingToStack = {
                stackableItem: stackableItem,
                stackableItemNewCurrentCount: stackableItemNewCurrentCount,
                draggedItemNewCurrentCount: draggedItemNewCurrentCount
            };
            dispatch(_setHoveredSquares(hoveredSquare, allHoveredSquares, canDrop = true, hoveredArea, goingToStack));
        }
        else {
            dispatch(_setHoveredSquares(hoveredSquare, allHoveredSquares, canDrop, hoveredArea));
        }
    };
};
exports.setHoveredSquares = setHoveredSquares;
var invokeOnMouseUp = function () {
    var draggedItem = document.getElementById('curr-dragged-item');
    var event = new Event('mouseup');
    draggedItem.dispatchEvent(event);
};
exports.invokeOnMouseUp = invokeOnMouseUp;
var stackItem = function (fromSplit) {
    if (fromSplit === void 0) { fromSplit = false; }
    return function (dispatch, getState) {
        var _a = getState().draggedItem, draggedItem = _a.item, draggedItemArea = _a.draggedItemArea, hoveredArea = _a.hoveredArea, _b = _a.goingToStack, stackableItem = _b.stackableItem, stackableItemNewCurrentCount = _b.stackableItemNewCurrentCount, draggedItemNewCurrentCount = _b.draggedItemNewCurrentCount;
        if (!fromSplit) {
            if (draggedItemArea === 1) {
                if (draggedItemNewCurrentCount === 0) {
                    dispatch(board_1.removeItemFromBoard(draggedItem.id));
                    draggedItem.mainCell = stackableItem.mainCell;
                }
                else if (draggedItemNewCurrentCount > 0) {
                    dispatch(board_1.boardChangeCurrentCountByItemId(draggedItem.id, draggedItemNewCurrentCount));
                    draggedItem.currentCount = draggedItemNewCurrentCount;
                }
            }
            else if (draggedItemArea === 2) {
                if (draggedItemNewCurrentCount === 0) {
                    dispatch(externalBoard_1.removeExternalBoardItemById(draggedItem.id));
                    draggedItem.mainCell = stackableItem.mainCell;
                }
                else if (draggedItemNewCurrentCount > 0) {
                    dispatch(externalBoard_1.externalBoardChangeCurrentCountByItemId(draggedItem.id, draggedItemNewCurrentCount));
                    draggedItem.currentCount = draggedItemNewCurrentCount;
                }
            }
            else if (draggedItemArea === 3) {
                if (draggedItemNewCurrentCount === 0) {
                    dispatch(equippedItems_1.removeEquippedItem(draggedItem.id));
                    draggedItem.mainCell = stackableItem.mainCell;
                }
                else if (draggedItemNewCurrentCount > 0) {
                    dispatch(equippedItems_1.equippedChangeCurrentCount(draggedItem.mainCell, draggedItemNewCurrentCount));
                    draggedItem.currentCount = draggedItemNewCurrentCount;
                }
            }
        }
        if (hoveredArea === 1) {
            dispatch(board_1.boardChangeCurrentCountByItemId(stackableItem.id, stackableItemNewCurrentCount));
        }
        else if (hoveredArea === 2) {
            dispatch(externalBoard_1.externalBoardChangeCurrentCountByItemId(stackableItem.id, stackableItemNewCurrentCount));
        }
        else if (hoveredArea === 3) {
            dispatch(equippedItems_1.equippedChangeCurrentCount(stackableItem.mainCell, stackableItemNewCurrentCount));
        }
        if (!fromSplit) {
            draggedItem.currentCount = draggedItemNewCurrentCount;
            stackableItem.currentCount = stackableItemNewCurrentCount;
            var translatedToServerDraggedItem = translateToServerItem_1.translateToServerItem(draggedItem);
            var translatedToServerStackableItem = translateToServerItem_1.translateToServerItem(stackableItem);
            try {
                mp.trigger('cel_cf_stackItem', translatedToServerDraggedItem, translatedToServerStackableItem);
            }
            catch (e) { }
        }
    };
};
exports.stackItem = stackItem;
var setGoingToDrop = function (newState, areaId) {
    if (areaId === void 0) { areaId = 2; }
    return function (dispatch) {
        var canDrop = newState;
        dispatch(_setGoingToDrop(newState, canDrop, areaId));
    };
};
exports.setGoingToDrop = setGoingToDrop;
var rotateItem = function () {
    return function (dispatch, getState) {
        var oldDraggedItemInfo = __assign({}, getState().draggedItem);
        var oldDraggedItem = oldDraggedItemInfo.item;
        oldDraggedItem.isRotated = !oldDraggedItem.isRotated;
        var draggedItem = document.getElementById('curr-dragged-item');
        if (oldDraggedItem.isRotated) {
            draggedItem.style.transform = 'rotate(90deg)';
        }
        else {
            draggedItem.style.transform = 'none';
        }
        dispatch(draggedItemRelease());
        if (oldDraggedItemInfo.goingToDrop) {
            dispatch(addDraggedItem(__assign({}, oldDraggedItem), [-100, -100], true, null, oldDraggedItemInfo.goingToDrop.areaId));
        }
        else if (oldDraggedItemInfo.hoveredArea === 1) {
            dispatch(addDraggedItem(__assign({}, oldDraggedItem), oldDraggedItemInfo.hoveredSquare, true));
        }
        else if (oldDraggedItemInfo.hoveredArea === 2) {
            dispatch(addDraggedItem(__assign({}, oldDraggedItem), oldDraggedItemInfo.hoveredSquare, true, null, null, true));
        }
        else if (oldDraggedItemInfo.hoveredArea === 3) {
            dispatch(addDraggedItem(__assign({}, oldDraggedItem), [-100, -100], true, oldDraggedItemInfo.hoveredSquare));
        }
    };
};
exports.rotateItem = rotateItem;
var rotateItemOnBoard = function (item, hoveredItemArea) {
    var newItem = __assign({}, item);
    newItem.isRotated = !newItem.isRotated;
    var itemWidth = newItem.width;
    var itemHeight = newItem.height;
    if (newItem.isRotated) {
        itemWidth = newItem.height;
        itemHeight = newItem.width;
    }
    var _a = _getItemOffsets(itemWidth, itemHeight), xUp = _a.xUp, xDown = _a.xDown, yUp = _a.yUp, yDown = _a.yDown;
    var averageCell = [newItem.mainCell[0] + yDown, newItem.mainCell[1] + xDown];
    var allHoveredSquares = _getHoveredSquares(averageCell, xUp, xDown, yUp, yDown);
    return function (dispatch, getState) {
        if (hoveredItemArea === 1) {
            var board_2 = getState().board.board;
            var canDrop_1 = true;
            allHoveredSquares.forEach(function (hoveredSquare) {
                var _a = __read(hoveredSquare, 2), hoveredX = _a[0], hoveredY = _a[1];
                if (hoveredX < boardDimensions_1.xMin || hoveredX > boardDimensions_1.xMax || hoveredY < boardDimensions_1.yMin || hoveredY > boardDimensions_1.yMax) {
                    canDrop_1 = false;
                }
                else if (board_2[hoveredY][hoveredX] !== null) {
                    if (board_2[hoveredY][hoveredX].id !== newItem.id) {
                        canDrop_1 = false;
                    }
                }
            });
            if (canDrop_1) {
                newItem.mainCell = [averageCell[0] - xDown, averageCell[1] - yDown];
                dispatch(board_1.removeItemFromBoard(item.id));
                dispatch(board_1.addItemBySquares(allHoveredSquares, newItem));
                dispatch(hoveredItem_1.addHoveredItem(newItem, 1));
            }
        }
        else if (hoveredItemArea === 2) {
            var externalBoard_2 = getState().externalBoard.externalBoard;
            var canDrop_2 = true;
            allHoveredSquares.forEach(function (hoveredSquare) {
                var _a = __read(hoveredSquare, 2), hoveredX = _a[0], hoveredY = _a[1];
                if (hoveredX < boardDimensions_1.xMin || hoveredX > boardDimensions_1.xMax || hoveredY < boardDimensions_1.yMin || hoveredY > externalBoard_2.length - 1) {
                    canDrop_2 = false;
                }
                else if (externalBoard_2[hoveredY][hoveredX] !== null) {
                    if (externalBoard_2[hoveredY][hoveredX].id !== newItem.id) {
                        canDrop_2 = false;
                    }
                }
            });
            if (canDrop_2) {
                newItem.mainCell = [averageCell[0] - xDown, averageCell[1] - yDown];
                dispatch(externalBoard_1.removeExternalBoardItemById(item.id));
                dispatch(externalBoard_1.addExternalItemsBySquares(allHoveredSquares, newItem));
                dispatch(hoveredItem_1.addHoveredItem(newItem, 2));
            }
        }
    };
};
exports.rotateItemOnBoard = rotateItemOnBoard;
var dragEndHandler = function (fromEquipped) {
    if (fromEquipped === void 0) { fromEquipped = false; }
    return function (dispatch, getState) {
        var _a = getState().draggedItem, canDrop = _a.canDrop, goingToStack = _a.goingToStack, goingToDrop = _a.goingToDrop, draggedItem = _a.item, hoveredSquare = _a.hoveredSquare, hoveredArea = _a.hoveredArea, draggedItemArea = _a.draggedItemArea;
        if (canDrop) {
            if (goingToStack) {
                dispatch(stackItem());
            }
            else if (goingToDrop) {
                if (typeof draggedItem.mainCell === 'object') {
                    if (draggedItemArea === 1) {
                        if (draggedItem.category === types_2.ItemTypes.WEAPON_RIFLE || draggedItem.category === types_2.ItemTypes.WEAPON_PISTOL
                            || draggedItem.category === types_2.ItemTypes.WEAPON_LAUNCHER) {
                            dispatch(equippedItems_1.removeEquippedWeaponFromEquipped(draggedItem.id));
                        }
                        dispatch(board_1.removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
                    }
                    else if (draggedItemArea === 2) {
                        dispatch(externalBoard_1.removeExternalBoardItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
                    }
                }
                else if (draggedItemArea === 3) {
                    if (draggedItem.category === types_2.ItemTypes.WEAPON_RIFLE || draggedItem.category === types_2.ItemTypes.WEAPON_PISTOL
                        || draggedItem.category === types_2.ItemTypes.WEAPON_LAUNCHER) {
                        dispatch(board_1.removeItemFromBoard(draggedItem.id));
                    }
                    dispatch(equippedItems_1.removeEquippedItem(draggedItem.mainCell));
                }
                contextMenu_1.mpTriggerDropItem(draggedItem);
            }
            else if (hoveredArea === 3) {
                if (fromEquipped) {
                    if (draggedItem.mainCell !== hoveredSquare) {
                        dispatch(equippedItems_1.removeEquippedItem(draggedItem.mainCell));
                        try {
                            dispatch(equippedItems_1.setEquippedItem(hoveredSquare));
                        }
                        catch (e) { }
                    }
                }
                else {
                    if (draggedItemArea === 1) {
                        if (draggedItem.category === types_2.ItemTypes.WEAPON_RIFLE || draggedItem.category === types_2.ItemTypes.WEAPON_PISTOL
                            || draggedItem.category === types_2.ItemTypes.WEAPON_LAUNCHER) {
                            dispatch(board_1.changeEquippedState(draggedItem, true));
                        }
                        else {
                            dispatch(board_1.removeItemFromBoard(draggedItem.id));
                        }
                    }
                    else if (draggedItemArea === 2) {
                        dispatch(externalBoard_1.removeExternalBoardItemById(draggedItem.id));
                    }
                    try {
                        dispatch(equippedItems_1.setEquippedItem(hoveredSquare));
                    }
                    catch (e) { }
                }
            }
            else if (hoveredArea === 1) {
                if (fromEquipped) {
                    dispatch(equippedItems_1.removeEquippedItem(draggedItem.mainCell));
                    if (draggedItem.category === types_2.ItemTypes.WEAPON_RIFLE || draggedItem.category === types_2.ItemTypes.WEAPON_PISTOL
                        || draggedItem.category === types_2.ItemTypes.WEAPON_LAUNCHER) {
                        dispatch(board_1.removeItemFromBoard(draggedItem.id));
                    }
                }
                else {
                    if (draggedItemArea === 1) {
                        dispatch(board_1.removeItemFromBoard(draggedItem.id));
                    }
                    else if (draggedItemArea === 2) {
                        dispatch(externalBoard_1.removeExternalBoardItemById(draggedItem.id));
                    }
                }
                try {
                    dispatch(board_1.addItem());
                }
                catch (e) { }
            }
            else if (hoveredArea === 2) {
                if (fromEquipped) {
                    dispatch(equippedItems_1.removeEquippedItem(draggedItem.mainCell));
                    if (draggedItem.category === types_2.ItemTypes.WEAPON_RIFLE || draggedItem.category === types_2.ItemTypes.WEAPON_PISTOL
                        || draggedItem.category === types_2.ItemTypes.WEAPON_LAUNCHER) {
                        dispatch(board_1.removeItemFromBoard(draggedItem.id));
                    }
                }
                else {
                    if (draggedItemArea === 1) {
                        dispatch(board_1.removeItemFromBoard(draggedItem.id));
                    }
                    else if (draggedItemArea === 2) {
                        dispatch(externalBoard_1.removeExternalBoardItemById(draggedItem.id));
                    }
                }
                try {
                    dispatch(externalBoard_1.addExternalBoardItem());
                }
                catch (e) { }
            }
        }
        dispatch(draggedItemRelease());
    };
};
exports.dragEndHandler = dragEndHandler;


/***/ }),

/***/ 1716:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equippedChangeCurrentCount = exports.removeEquippedWeaponFromEquipped = exports.setEquippedItems = exports.removeEquippedItem = exports.setEquippedItem = void 0;
var types_1 = __webpack_require__(5183);
var translateToServerItem_1 = __webpack_require__(3395);
var _removeEquippedItem = function (cellId) {
    return { type: types_1.EQUIPPED_ITEM_REMOVE, id: cellId };
};
var _releaseAllEquippedItems = function () {
    return { type: types_1.EQUIPPED_ALL_ITEMS_RELEASE };
};
var setEquippedItem = function (cellId) { return function (dispatch, getState) {
    var item = __assign({}, getState().draggedItem.item);
    item.mainCell = cellId;
    item.isEquipped = true;
    item.isRotated = false;
    dispatch({ type: types_1.EQUIPPED_ITEM_SET, id: cellId, item: item });
    var itemToServer = translateToServerItem_1.translateToServerItem(item);
    mp.trigger('cef_cl_moveItem', itemToServer);
}; };
exports.setEquippedItem = setEquippedItem;
var setEquippedItems = function (items) {
    return { type: types_1.EQUIPPED_ITEMS_SET, items: items };
};
exports.setEquippedItems = setEquippedItems;
var removeEquippedItem = function (cellId) {
    return function (dispatch) {
        dispatch(_removeEquippedItem(cellId));
    };
};
exports.removeEquippedItem = removeEquippedItem;
var removeEquippedWeaponFromEquipped = function (id) {
    return function (dispatch, getState) {
        var weaponCells = getState().equippedItems.cells.slice(1, 4);
        var weaponCellIdx = weaponCells.findIndex(function (cell) { return cell.item && cell.item.id === id; });
        if (weaponCellIdx !== -1) {
            dispatch(_removeEquippedItem(weaponCellIdx + 1));
        }
    };
};
exports.removeEquippedWeaponFromEquipped = removeEquippedWeaponFromEquipped;
var equippedChangeCurrentCount = function (squareId, newCurrentCount) {
    return { type: types_1.EQUIPPED_CURRENT_COUNT_CHANGE, squareId: squareId, newCurrentCount: newCurrentCount };
};
exports.equippedChangeCurrentCount = equippedChangeCurrentCount;


/***/ }),

/***/ 4316:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.externalBoardChangeCurrentCountByItemId = exports.removeExternalBoardItemById = exports.removeExternalBoardItem = exports.addExternalItemsBySquares = exports.addExternalBoardItem = exports.closeExternalBoard = exports.openExternalBoard = void 0;
var types_1 = __webpack_require__(5183);
var boardDimensions_1 = __webpack_require__(5224);
var openExternalBoard = function (items, height) {
    return { type: types_1.OPEN_EXTERNAL_BOARD, items: items, height: height };
};
exports.openExternalBoard = openExternalBoard;
var closeExternalBoard = function () {
    return { type: types_1.CLOSE_EXTERNAL_BOARD };
};
exports.closeExternalBoard = closeExternalBoard;
var _removeExternalItem = function (squares) {
    return { type: types_1.EXTERNAL_ITEM_SQUARES_RELEASE, squares: squares };
};
var addExternalItemsBySquares = function (squares, item) {
    return { type: types_1.SINGLE_EXTERNAL_ITEM_SQUARES_FILL, squares: squares, item: item };
};
exports.addExternalItemsBySquares = addExternalItemsBySquares;
var addExternalBoardItem = function () {
    return function (dispatch, getState) {
        var _a = getState().draggedItem, hoveredSquare = _a.hoveredSquare, allHoveredSquares = _a.allHoveredSquares, xDown = _a.xDown, yDown = _a.yDown, draggedItem = _a.item;
        var newDraggedItem = __assign({}, draggedItem);
        newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];
        newDraggedItem.isEquipped = false;
        dispatch(addExternalItemsBySquares(allHoveredSquares, newDraggedItem));
    };
};
exports.addExternalBoardItem = addExternalBoardItem;
var removeExternalBoardItem = function (_a, width, height) {
    var _b = __read(_a, 2), x = _b[0], y = _b[1];
    if (width === void 0) { width = 1; }
    if (height === void 0) { height = 1; }
    return function (dispatch) {
        var itemsToRemove = [];
        for (var currX = x; currX < x + width; currX++) {
            for (var currY = y; currY < y + height; currY++) {
                itemsToRemove.push([currX, currY]);
            }
        }
        dispatch(_removeExternalItem(itemsToRemove));
    };
};
exports.removeExternalBoardItem = removeExternalBoardItem;
var removeExternalBoardItemById = function (itemId) {
    return function (dispatch, getState) {
        var externalBoard = getState().externalBoard.externalBoard;
        var squaresToRemove = [];
        for (var y = boardDimensions_1.yMin; y < externalBoard.length; y++) {
            for (var x = boardDimensions_1.xMin; x <= boardDimensions_1.xMax; x++) {
                if (externalBoard[y][x] && externalBoard[y][x].id === itemId) {
                    squaresToRemove.push([x, y]);
                }
            }
        }
        dispatch(_removeExternalItem(squaresToRemove));
    };
};
exports.removeExternalBoardItemById = removeExternalBoardItemById;
var externalBoardChangeCurrentCountByItemId = function (id, newCurrentCount) {
    return function (dispatch, getState) {
        var externalBoardCells = getState().externalBoard.externalBoard;
        var requiredCells = [];
        externalBoardCells.forEach(function (row, yPos) {
            row.forEach(function (item, xPos) {
                if (item && item.id === id) {
                    requiredCells.push([xPos, yPos]);
                }
            });
        });
        if (newCurrentCount === 0) {
            return _removeExternalItem(requiredCells);
        }
        dispatch({ type: types_1.EXTERNAL_BOARD_CURRENT_COUNT_CHANGE, squares: requiredCells, newCurrentCount: newCurrentCount });
    };
};
exports.externalBoardChangeCurrentCountByItemId = externalBoardChangeCurrentCountByItemId;


/***/ }),

/***/ 530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeHoveredItem = exports.addHoveredItem = void 0;
var types_1 = __webpack_require__(5183);
var _addHoveredItem = function (item, hoveredArea) {
    return { type: types_1.HOVERED_ITEM_ADD, item: item, hoveredArea: hoveredArea };
};
var _removeHoveredItem = function () {
    return { type: types_1.HOVERED_ITEM_REMOVE };
};
var addHoveredItem = function (item, hoveredArea) {
    return function (dispatch) {
        dispatch(_addHoveredItem(item, hoveredArea));
    };
};
exports.addHoveredItem = addHoveredItem;
var removeHoveredItem = function () {
    return function (dispatch) {
        dispatch(_removeHoveredItem());
    };
};
exports.removeHoveredItem = removeHoveredItem;


/***/ }),

/***/ 5183:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HOVERED_ITEM_REMOVE = exports.HOVERED_ITEM_ADD = exports.CONTEXT_MENU_SPLIT_OPEN = exports.CONTEXT_MENU_CLOSE = exports.CONTEXT_MENU_OPEN = exports.EQUIPPED_ALL_ITEMS_RELEASE = exports.EQUIPPED_CURRENT_COUNT_CHANGE = exports.EQUIPPED_ITEM_REMOVE = exports.EQUIPPED_ITEMS_SET = exports.EQUIPPED_ITEM_SET = exports.HOVERED_SQUARES_REMOVE = exports.HOVERED_SQUARES_SET = exports.GOING_TO_DROP_SET = exports.DRAGGED_ITEM_RELEASE = exports.DRAGGED_ITEM_SET = exports.EXTERNAL_BOARD_CURRENT_COUNT_CHANGE = exports.EXTERNAL_ITEM_SQUARES_RELEASE = exports.SINGLE_EXTERNAL_ITEM_SQUARES_FILL = exports.CLOSE_EXTERNAL_BOARD = exports.OPEN_EXTERNAL_BOARD = exports.BOARD_SET_SQUARE_SIZE = exports.BOARD_ALL_ITEMS_RELEASE = exports.BOARD_CURRENT_COUNT_CHANGE = exports.EQUIPPED_STATE_CHANGE = exports.SQUARES_RELEASE = exports.SINGLE_ITEM_SQUARES_FILL = exports.SQUARES_FILL = void 0;
exports.SQUARES_FILL = 'SQUARES_FILL';
exports.SINGLE_ITEM_SQUARES_FILL = 'SINGLE_ITEM_SQUARES_FILL';
exports.SQUARES_RELEASE = 'SQUARES_RELEASE';
exports.EQUIPPED_STATE_CHANGE = 'EQUIPPED_STATE_CHANGE';
exports.BOARD_CURRENT_COUNT_CHANGE = 'BOARD_CURRENT_COUNT_CHANGE';
exports.BOARD_ALL_ITEMS_RELEASE = 'BOARD_ALL_ITEMS_RELEASE';
exports.BOARD_SET_SQUARE_SIZE = 'BOARD_SET_SQUARE_SIZE';
exports.OPEN_EXTERNAL_BOARD = 'OPEN_EXTERNAL_BOARD';
exports.CLOSE_EXTERNAL_BOARD = 'CLOSE_EXTERNAL_BOARD';
exports.SINGLE_EXTERNAL_ITEM_SQUARES_FILL = 'SINGLE_EXTERNAL_ITEM_SQUARES_FILL';
exports.EXTERNAL_ITEM_SQUARES_RELEASE = 'EXTERNAL_ITEM_SQUARES_RELEASE';
exports.EXTERNAL_BOARD_CURRENT_COUNT_CHANGE = 'EXTERNAL_BOARD_CURRENT_COUNT_CHANGE';
exports.DRAGGED_ITEM_SET = 'DRAGGED_ITEM_SET';
exports.DRAGGED_ITEM_RELEASE = 'DRAGGED_ITEM_RELEASE';
exports.GOING_TO_DROP_SET = 'GOING_TO_DROP_SET';
exports.HOVERED_SQUARES_SET = 'HOVERED_SQUARES_SET';
exports.HOVERED_SQUARES_REMOVE = 'HOVERED_SQUARES_REMOVE';
exports.EQUIPPED_ITEM_SET = 'EQUIPPED_ITEM_SET';
exports.EQUIPPED_ITEMS_SET = 'EQUIPPED_ITEMS_SET';
exports.EQUIPPED_ITEM_REMOVE = 'EQUIPPED_ITEM_REMOVE';
exports.EQUIPPED_CURRENT_COUNT_CHANGE = 'EQUIPPED_CURRENT_COUNT_CHANGE';
exports.EQUIPPED_ALL_ITEMS_RELEASE = 'BOARD_ALL_ITEMS_RELEASE';
exports.CONTEXT_MENU_OPEN = 'CONTEXT_MENU_OPEN';
exports.CONTEXT_MENU_CLOSE = 'CONTEXT_MENU_CLOSE';
exports.CONTEXT_MENU_SPLIT_OPEN = 'CONTEXT_MENU_SPLIT_OPEN';
exports.HOVERED_ITEM_ADD = 'HOVERED_ITEM_ADD';
exports.HOVERED_ITEM_REMOVE = 'HOVERED_ITEM_REMOVE';


/***/ }),

/***/ 3458:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var boardDimensions_1 = __webpack_require__(5224);
var types_1 = __webpack_require__(5183);
var _fillInitialState = function () {
    var board = [];
    for (var y = boardDimensions_1.yMin; y <= boardDimensions_1.yMax; y++) {
        board[y] = [];
        for (var x = boardDimensions_1.xMin; x <= boardDimensions_1.xMax; x++) {
            board[y][x] = null;
        }
    }
    return { board: board, boardSquareSize: null };
};
exports.default = (function (state, action) {
    if (state === void 0) { state = _fillInitialState(); }
    switch (action.type) {
        case types_1.SINGLE_ITEM_SQUARES_FILL: {
            var newBoard_1 = __spread(state.board);
            var squares = action.squares, item_1 = action.item;
            squares.forEach(function (square) {
                var _a = __read(square, 2), x = _a[0], y = _a[1];
                newBoard_1[y][x] = item_1;
            });
            return __assign(__assign({}, state), { board: newBoard_1 });
        }
        case types_1.SQUARES_FILL: {
            var newBoard_2 = _fillInitialState().board;
            action.items.forEach(function (itemAndSquares) {
                var squares = itemAndSquares.squares, itemProps = __rest(itemAndSquares, ["squares"]);
                squares.forEach(function (square) {
                    newBoard_2[square[1]][square[0]] = __assign({}, itemProps);
                });
            });
            return __assign(__assign({}, state), { board: newBoard_2 });
        }
        case types_1.SQUARES_RELEASE: {
            var newBoard_3 = __spread(state.board);
            action.squares.forEach(function (square) {
                var _a = __read(square, 2), x = _a[0], y = _a[1];
                newBoard_3[y][x] = null;
            });
            return __assign(__assign({}, state), { board: newBoard_3 });
        }
        case types_1.EQUIPPED_STATE_CHANGE: {
            var newBoard_4 = __spread(state.board);
            action.squares.forEach(function (square) {
                var _a = __read(square, 2), x = _a[0], y = _a[1];
                newBoard_4[y][x] = action.item;
            });
            return __assign(__assign({}, state), { board: newBoard_4 });
        }
        case types_1.BOARD_CURRENT_COUNT_CHANGE: {
            var newBoard_5 = __spread(state.board);
            action.squares.forEach(function (square) {
                var _a = __read(square, 2), x = _a[0], y = _a[1];
                newBoard_5[y][x].currentCount = action.newCurrentCount;
            });
            return __assign(__assign({}, state), { board: newBoard_5 });
        }
        case types_1.BOARD_ALL_ITEMS_RELEASE: {
            var board = _fillInitialState().board;
            return __assign(__assign({}, state), { board: board });
        }
        case types_1.BOARD_SET_SQUARE_SIZE: {
            return __assign(__assign({}, state), { boardSquareSize: action.size });
        }
        default: {
            return state;
        }
    }
});


/***/ }),

/***/ 5134:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(5183);
var initialState = {
    contextItem: null,
    hoveredArea: null,
    leftOffset: null,
    topOffset: null,
    topOffsetTopContext: null,
    splitMenuOpen: false,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.CONTEXT_MENU_OPEN: {
            return __assign(__assign({}, state), { contextItem: action.item, hoveredArea: action.hoveredArea, leftOffset: action.leftOffset, topOffset: action.topOffset, topOffsetTopContext: action.topOffsetTopContext, splitMenuOpen: false });
        }
        case types_1.CONTEXT_MENU_SPLIT_OPEN: {
            return __assign(__assign({}, state), { splitMenuOpen: true });
        }
        case types_1.CONTEXT_MENU_CLOSE:
        case types_1.DRAGGED_ITEM_SET: {
            console.log('context menu close');
            return initialState;
        }
        default: {
            return state;
        }
    }
});


/***/ }),

/***/ 7940:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(5183);
var HoveredAreas;
(function (HoveredAreas) {
    HoveredAreas[HoveredAreas["Board"] = 1] = "Board";
    HoveredAreas[HoveredAreas["ExternalBoard"] = 2] = "ExternalBoard";
    HoveredAreas[HoveredAreas["Equipped"] = 3] = "Equipped";
})(HoveredAreas || (HoveredAreas = {}));
var initialState = {
    item: null,
    draggedItemArea: null,
    xUp: null,
    xDown: null,
    yUp: null,
    yDown: null,
    hoveredArea: null,
    hoveredSquare: null,
    allHoveredSquares: [],
    canDrop: false,
    goingToDrop: null,
    goingToStack: null,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.DRAGGED_ITEM_SET: {
            var item = action.item, xUp = action.xUp, xDown = action.xDown, yUp = action.yUp, yDown = action.yDown, draggedItemArea = action.draggedItemArea;
            return __assign(__assign({}, state), { item: __assign({}, item), draggedItemArea: draggedItemArea,
                xUp: xUp,
                xDown: xDown,
                yUp: yUp,
                yDown: yDown, goingToDrop: false, goingToStack: false });
        }
        case types_1.DRAGGED_ITEM_RELEASE: {
            return initialState;
        }
        case types_1.HOVERED_SQUARES_REMOVE: {
            return __assign(__assign({}, state), { hoveredSquare: null, allHoveredSquares: [], hoveredArea: null });
        }
        case types_1.HOVERED_SQUARES_SET: {
            return __assign(__assign({}, state), { hoveredArea: action.hoveredArea, hoveredSquare: action.square, allHoveredSquares: action.squares, canDrop: action.canDrop, goingToDrop: false, goingToStack: action.goingToStack });
        }
        case types_1.GOING_TO_DROP_SET: {
            var newGoingToDrop = action.goingToDrop ? { areaId: action.areaId } : null;
            return __assign(__assign({}, state), { hoveredSquare: null, allHoveredSquares: [], goingToDrop: newGoingToDrop, canDrop: action.canDrop, goingToStack: false, hoveredArea: null });
        }
        default: {
            return state;
        }
    }
});


/***/ }),

/***/ 953:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(5183);
var EquippedItemsCell_1 = __importDefault(__webpack_require__(2459));
var fillInitialState = function () {
    var cells = [];
    cells[1] = new EquippedItemsCell_1.default(null);
    cells[2] = new EquippedItemsCell_1.default(null);
    cells[3] = new EquippedItemsCell_1.default(null);
    cells[10] = new EquippedItemsCell_1.default(null);
    cells[20] = new EquippedItemsCell_1.default(null);
    cells[30] = new EquippedItemsCell_1.default(null);
    cells[11] = new EquippedItemsCell_1.default(null);
    cells[12] = new EquippedItemsCell_1.default(null);
    cells[13] = new EquippedItemsCell_1.default(null);
    cells[21] = new EquippedItemsCell_1.default(null);
    cells[22] = new EquippedItemsCell_1.default(null);
    cells[23] = new EquippedItemsCell_1.default(null);
    cells[31] = new EquippedItemsCell_1.default(null);
    cells[32] = new EquippedItemsCell_1.default(null);
    cells[33] = new EquippedItemsCell_1.default(null);
    cells[40] = new EquippedItemsCell_1.default(null);
    cells[41] = new EquippedItemsCell_1.default(null);
    cells[50] = new EquippedItemsCell_1.default(null);
    cells[51] = new EquippedItemsCell_1.default(null);
    cells[52] = new EquippedItemsCell_1.default(null);
    cells[60] = new EquippedItemsCell_1.default(null);
    cells[61] = new EquippedItemsCell_1.default(null);
    cells[62] = new EquippedItemsCell_1.default(null);
    cells[70] = new EquippedItemsCell_1.default(null);
    cells[71] = new EquippedItemsCell_1.default(null);
    cells[72] = new EquippedItemsCell_1.default(null);
    cells[80] = new EquippedItemsCell_1.default(null);
    cells[81] = new EquippedItemsCell_1.default(null);
    cells[82] = new EquippedItemsCell_1.default(null);
    cells[90] = new EquippedItemsCell_1.default(null);
    cells[91] = new EquippedItemsCell_1.default(null);
    cells[92] = new EquippedItemsCell_1.default(null);
    cells[93] = new EquippedItemsCell_1.default(null);
    return { cells: cells };
};
exports.default = (function (state, action) {
    if (state === void 0) { state = fillInitialState(); }
    switch (action.type) {
        case types_1.EQUIPPED_ITEM_SET: {
            var cells = __spread(state.cells);
            cells[action.id] = __assign(__assign({}, cells[action.id]), { item: action.item });
            return __assign(__assign({}, state), { cells: cells });
        }
        case types_1.EQUIPPED_ITEMS_SET: {
            var cells_1 = fillInitialState().cells;
            action.items.forEach(function (item) {
                var newItem = __assign({}, item);
                cells_1[newItem.mainCell].item = newItem;
            });
            return __assign(__assign({}, state), { cells: cells_1 });
        }
        case types_1.EQUIPPED_ITEM_REMOVE: {
            var cells = __spread(state.cells);
            cells[action.id] = __assign(__assign({}, cells[action.id]), { item: null });
            return __assign(__assign({}, state), { cells: cells });
        }
        case types_1.EQUIPPED_CURRENT_COUNT_CHANGE: {
            var cells = __spread(state.cells);
            cells[action.squareId].item = __assign(__assign({}, cells[action.squareId].item), { currentCount: action.newCurrentCount });
            return __assign(__assign({}, state), { cells: cells });
        }
        case types_1.EQUIPPED_ALL_ITEMS_RELEASE: {
            return fillInitialState();
        }
        default: {
            return state;
        }
    }
});


/***/ }),

/***/ 889:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(5183);
var boardDimensions_1 = __webpack_require__(5224);
var _fillExternalBoard;
_fillExternalBoard = function (height) {
    var boardItems = [];
    for (var y = boardDimensions_1.yMin; y < height; y++) {
        boardItems[y] = [];
        for (var x = boardDimensions_1.xMin; x <= boardDimensions_1.xMax; x++) {
            boardItems[y][x] = null;
        }
    }
    return boardItems;
};
var initialState = {
    externalBoard: [],
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.SINGLE_EXTERNAL_ITEM_SQUARES_FILL: {
            var newBoard_1 = __spread(state.externalBoard);
            var squares = action.squares, item_1 = action.item;
            squares.forEach(function (square) {
                var _a = __read(square, 2), x = _a[0], y = _a[1];
                newBoard_1[y][x] = item_1;
            });
            return __assign(__assign({}, state), { externalBoard: newBoard_1 });
        }
        case types_1.OPEN_EXTERNAL_BOARD: {
            var newBoard_2 = _fillExternalBoard(action.height);
            action.items.forEach(function (itemAndSquares) {
                var squares = itemAndSquares.squares, itemProps = __rest(itemAndSquares, ["squares"]);
                squares.forEach(function (square) {
                    newBoard_2[square[1]][square[0]] = __assign({}, itemProps);
                });
            });
            return __assign(__assign({}, state), { externalBoard: newBoard_2 });
        }
        case types_1.EXTERNAL_ITEM_SQUARES_RELEASE: {
            var newBoard_3 = __spread(state.externalBoard);
            action.squares.forEach(function (square) {
                var _a = __read(square, 2), x = _a[0], y = _a[1];
                newBoard_3[y][x] = null;
            });
            return __assign(__assign({}, state), { externalBoard: newBoard_3 });
        }
        case types_1.CLOSE_EXTERNAL_BOARD: {
            return __assign(__assign({}, state), { externalBoard: [] });
        }
        case types_1.EXTERNAL_BOARD_CURRENT_COUNT_CHANGE: {
            var newBoard_4 = __spread(state.externalBoard);
            action.squares.forEach(function (square) {
                var _a = __read(square, 2), x = _a[0], y = _a[1];
                newBoard_4[y][x].currentCount = action.newCurrentCount;
            });
            return __assign(__assign({}, state), { externalBoard: newBoard_4 });
        }
        default: {
            return state;
        }
    }
});


/***/ }),

/***/ 7481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(5183);
var initialState = {
    item: null,
    hoveredArea: null,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.HOVERED_ITEM_ADD: {
            return __assign(__assign({}, state), { item: action.item, hoveredArea: action.hoveredArea });
        }
        case types_1.HOVERED_ITEM_REMOVE:
        case types_1.DRAGGED_ITEM_SET: {
            return __assign(__assign({}, state), { item: null, hoveredArea: null });
        }
        default: {
            return state;
        }
    }
});


/***/ }),

/***/ 6923:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var redux_1 = __webpack_require__(4890);
var board_1 = __importDefault(__webpack_require__(3458));
var externalBoard_1 = __importDefault(__webpack_require__(889));
var draggedItem_1 = __importDefault(__webpack_require__(7940));
var equippedItems_1 = __importDefault(__webpack_require__(953));
var contextMenu_1 = __importDefault(__webpack_require__(5134));
var hoveredItem_1 = __importDefault(__webpack_require__(7481));
exports.default = redux_1.combineReducers({
    board: board_1.default,
    externalBoard: externalBoard_1.default,
    draggedItem: draggedItem_1.default,
    equippedItems: equippedItems_1.default,
    contextMenu: contextMenu_1.default,
    hoveredItem: hoveredItem_1.default,
});


/***/ }),

/***/ 6152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var redux_1 = __webpack_require__(4890);
var redux_devtools_extension_1 = __webpack_require__(8500);
var redux_thunk_1 = __importDefault(__webpack_require__(3894));
var reducers_1 = __importDefault(__webpack_require__(6923));
var middleware = [redux_thunk_1.default];
exports.default = redux_1.createStore(reducers_1.default, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware.apply(void 0, __spread(middleware))));


/***/ }),

/***/ 3395:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.translateToServerItem = void 0;
var boardDimensions_1 = __webpack_require__(5224);
var translateToServerItem = function (item) {
    var id = item.id, name = item.name, category = item.category, mainCell = item.mainCell, width = item.width, height = item.height, currentCount = item.currentCount, isEquipped = item.isEquipped, isRotated = item.isRotated, rest = item.rest;
    var posNumberLeftAngle = mainCell;
    if (!isEquipped) {
        posNumberLeftAngle = mainCell[1] * (boardDimensions_1.xMax + 1) + (mainCell[0] + 1);
    }
    if (isRotated) {
        var tmp = width;
        width = height;
        height = tmp;
    }
    return JSON.stringify(__assign({ ID: id, Name: name, Category: category, PosNumberLeftAngle: posNumberLeftAngle, SizeX: width, SizeY: height, CurrentCount: currentCount, Enabled: isEquipped, IsRotated: isRotated }, rest));
};
exports.translateToServerItem = translateToServerItem;


/***/ }),

/***/ 3778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_assets_fonts_Montserrat_Bold_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _src_assets_fonts_Montserrat_Light_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4294);
/* harmony import */ var _src_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7664);
/* harmony import */ var _src_assets_fonts_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3661);
/* harmony import */ var _src_assets_fonts_BebasNeue_Regular_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8718);
/* harmony import */ var _src_assets_fonts_BebasNeue_Bold_otf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3389);
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_assets_fonts_Montserrat_Bold_ttf__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_assets_fonts_Montserrat_Light_ttf__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_assets_fonts_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_assets_fonts_BebasNeue_Regular_ttf__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_src_assets_fonts_BebasNeue_Bold_otf__WEBPACK_IMPORTED_MODULE_7__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,body,#root{height:100%;overflow:hidden;user-select:none}html{font-size:10px}@media(min-width: 1200px){html{font-size:11px}}@media(min-width: 1500px){html{font-size:15px}}@media(min-width: 1900px){html{font-size:17px}}@media(min-width: 2200px){html{font-size:19px}}@media(min-width: 2400px){html{font-size:20px}}@media(min-width: 3000px){html{font-size:22px}}@media(min-width: 3500px){html{font-size:24px}}body *{cursor:default !important}#root{overflow:hidden}@font-face{font-family:\"Montserrat-Bold\";src:local(\"Montserrat-Bold\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"Montserrat-Light\";src:local(\"Montserrat-Light\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"Montserrat-Regular\";src:local(\"Montserrat-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Montserrat-SemiBold\";src:local(\"Montserrat-SemiBold\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"BebasNeue-Regular\",sans-serif;src:local(\"BebasNeue-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"BebasNeue-Bold\";src:local(\"BebasNeue-Bold\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"opentype\")}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7194:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._2WPe3QeEKSYDfpQdTI4GS{background:rgba(56,69,168,.1);top:0;left:0;width:100%;height:100%}._2WPe3QeEKSYDfpQdTI4GS ._3i3LVrrC9aeBRgxCr6Xgo2{height:6.2%;width:100%;display:flex;align-items:center;justify-content:center;position:relative;z-index:200}._2WPe3QeEKSYDfpQdTI4GS ._3i3LVrrC9aeBRgxCr6Xgo2 ._1cy3vnXZgm1HjjUipEMftO{display:block;line-height:23px;font-size:14px}._2WPe3QeEKSYDfpQdTI4GS ._3jVw_Su6GxCV66To3geGw4{display:flex;height:93.8%;width:100%}._2WPe3QeEKSYDfpQdTI4GS ._1QdZKc0QaBNKSX8E1H2G9C{position:absolute;width:44.375%;height:13.148%;z-index:-100;bottom:0;right:0}._2WPe3QeEKSYDfpQdTI4GS .FYGXekizF9HpqDi1mIxkJ{position:absolute;width:44.375%;height:13.148%;z-index:-100;bottom:0;right:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AppContainer": "_2WPe3QeEKSYDfpQdTI4GS",
	"TopTooltip": "_3i3LVrrC9aeBRgxCr6Xgo2",
	"ToolTipText": "_1cy3vnXZgm1HjjUipEMftO",
	"App": "_3jVw_Su6GxCV66To3geGw4",
	"LeftSparksSvgContainer": "_1QdZKc0QaBNKSX8E1H2G9C",
	"RightSparksSvgContainer": "FYGXekizF9HpqDi1mIxkJ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._2TyGuSfsHBZhQgPYe3LRzD{background-color:transparent;display:block;position:relative;width:100%;height:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"CommonItem": "_2TyGuSfsHBZhQgPYe3LRzD"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hbHJvadIW1VD0dSKQuVrO{position:absolute;top:0;left:0;height:100%;width:100%;opacity:.6}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Overlay": "hbHJvadIW1VD0dSKQuVrO"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1mDHz3C22VZWUVMmf34R5t{position:absolute;width:6.46%;background:linear-gradient(90deg, transparent 0%, transparent 30%, #fafafa 31%, #fafafa 69%, transparent 70%, transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;z-index:250;box-sizing:border-box;clip-path:polygon(0% 6%, 46% 6%, 50% 0%, 54% 6%, 100% 6%, 100% 100%, 0% 100%)}._2xa1M-aTsDC8C-qgh-XVye{width:100%;height:94%;border-radius:.3rem;background-color:#fafafa;padding:7.26%;box-sizing:border-box;display:flex;flex-direction:column}._3vIg0omIhLD-A6xu_dywDK{flex-grow:1;margin-top:4.76%;border-radius:.3rem;box-sizing:border-box;background-color:#ff8c00;display:flex;flex-direction:column;justify-content:center}._3vIg0omIhLD-A6xu_dywDK:first-child{margin-top:0}._3vIg0omIhLD-A6xu_dywDK ._1lBP9Vj7vl0sk6wUhGXNAA{vertical-align:middle}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ContextMenuWrapper": "_1mDHz3C22VZWUVMmf34R5t",
	"ContextMenu": "_2xa1M-aTsDC8C-qgh-XVye",
	"Button": "_3vIg0omIhLD-A6xu_dywDK",
	"ButtonText": "_1lBP9Vj7vl0sk6wUhGXNAA"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._3w5Bjl34s3aDY4Mpqqvvp4{position:absolute;width:6.46%;height:9%;background:linear-gradient(90deg, transparent 0%, transparent 30%, #fafafa 31%, #fafafa 69%, transparent 70%, transparent 100%);display:flex;flex-direction:column;justify-content:flex-start;z-index:250;box-sizing:border-box;clip-path:polygon(0% 0%, 100% 0%, 100% 94%, 54% 94%, 50% 100%, 46% 94%, 0% 94%)}._3w5Bjl34s3aDY4Mpqqvvp4 ._2YqfJkouC-nsKTOx3eGb_V{width:100%;height:94%;border-radius:.3rem;background-color:#fafafa;padding:7.26%;box-sizing:border-box;display:flex;flex-direction:column}._3w5Bjl34s3aDY4Mpqqvvp4 ._2YqfJkouC-nsKTOx3eGb_V ._2dgtkpDgbx79Qcc9cqQt8U{height:30%;width:100%}._3w5Bjl34s3aDY4Mpqqvvp4 ._2YqfJkouC-nsKTOx3eGb_V ._2dgtkpDgbx79Qcc9cqQt8U .O1Rdk2R4XK3eq3FrGpAu4{width:100%}._3w5Bjl34s3aDY4Mpqqvvp4 ._2YqfJkouC-nsKTOx3eGb_V .QGrA1UVcgkWH-YvXgZSLx{height:20%}._3w5Bjl34s3aDY4Mpqqvvp4 ._2YqfJkouC-nsKTOx3eGb_V ._2d_EJDKiEafUBhK4VsdS9_{height:40%;display:flex}._3w5Bjl34s3aDY4Mpqqvvp4 ._2YqfJkouC-nsKTOx3eGb_V ._2d_EJDKiEafUBhK4VsdS9_ ._2g7Kx65N8H0Y75DJ5zaLfZ{width:70%;height:100%;background-color:red;border-radius:.5rem;display:flex;align-items:center;justify-content:center}._3w5Bjl34s3aDY4Mpqqvvp4 ._2YqfJkouC-nsKTOx3eGb_V ._2d_EJDKiEafUBhK4VsdS9_ ._1ARXlbKTE8dfe90tm51IIm{width:30%;height:100%;background-color:green;text-align:center;border-radius:.5rem;display:flex;align-items:center;justify-content:center}.hgu_zANtUjFDdRs4PWGF4{position:absolute;background-size:100% 100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"RangeComponentWrapper": "_3w5Bjl34s3aDY4Mpqqvvp4",
	"RangeComponentBG": "_2YqfJkouC-nsKTOx3eGb_V",
	"InputRangeWrapper": "_2dgtkpDgbx79Qcc9cqQt8U",
	"Input": "O1Rdk2R4XK3eq3FrGpAu4",
	"SplitCurrentCount": "QGrA1UVcgkWH-YvXgZSLx",
	"ButtonWrapper": "_2d_EJDKiEafUBhK4VsdS9_",
	"CancelButton": "_2g7Kx65N8H0Y75DJ5zaLfZ",
	"SuccessButton": "_1ARXlbKTE8dfe90tm51IIm",
	"DraggedItem": "hgu_zANtUjFDdRs4PWGF4"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1VwkE0S3VQ_jIkKE_fH_R2{height:20%;position:relative;z-index:200;display:flex;flex-direction:column;justify-content:flex-end}._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I{min-height:55.3%;display:flex;width:100%}._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._2u9lEvaHGRs9WijCNrwkrW{height:100%;min-width:40%}._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._2u9lEvaHGRs9WijCNrwkrW ._22eR0VdDsGi2kjCVxxH5JS{max-width:40%;margin-right:0;margin-left:auto;margin-top:0;display:flex;align-items:center;justify-content:flex-end}._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._2u9lEvaHGRs9WijCNrwkrW ._22eR0VdDsGi2kjCVxxH5JS ._2QeUFqKqkaWCu487SmtF1Z{width:100%;max-width:53px}@media(min-width: 1900px){._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._2u9lEvaHGRs9WijCNrwkrW ._22eR0VdDsGi2kjCVxxH5JS{margin-top:10%}}@media(min-width: 2100px){._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._2u9lEvaHGRs9WijCNrwkrW ._22eR0VdDsGi2kjCVxxH5JS{margin-top:20%}}@media(min-width: 2500px){._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._2u9lEvaHGRs9WijCNrwkrW ._22eR0VdDsGi2kjCVxxH5JS{margin-top:25%}}._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._3-75DbO1-3xZ6CX1KNiGHv{flex-grow:1;display:flex;flex-direction:column;margin-top:4%;justify-content:flex-start;align-items:flex-start}@media(min-width: 1900px){._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._3-75DbO1-3xZ6CX1KNiGHv{margin-top:9%}}@media(min-width: 2100px){._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._3-75DbO1-3xZ6CX1KNiGHv{margin-top:12%}}@media(min-width: 2100px){._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._3-75DbO1-3xZ6CX1KNiGHv{margin-top:12%}}._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._3-75DbO1-3xZ6CX1KNiGHv .Zm6Rr0_c_6l_vkAHG_0V1{font-family:inherit}._1VwkE0S3VQ_jIkKE_fH_R2 ._1Qwxw9s0BtxnqoJZw81o0I ._3-75DbO1-3xZ6CX1KNiGHv .Zm6Rr0_c_6l_vkAHG_0V1 ._3zk6_T7REQSrGH7zSgWgvn{white-space:pre;color:#c4c5c7;margin:3% 0 0 0;font-family:inherit}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"UniqueServerDescriptionContainer": "_1VwkE0S3VQ_jIkKE_fH_R2",
	"UniqueServerDescription": "_1Qwxw9s0BtxnqoJZw81o0I",
	"LogoContainer": "_2u9lEvaHGRs9WijCNrwkrW",
	"ImageWrapper": "_22eR0VdDsGi2kjCVxxH5JS",
	"Image": "_2QeUFqKqkaWCu487SmtF1Z",
	"TextContainer": "_3-75DbO1-3xZ6CX1KNiGHv",
	"ServerDescription": "Zm6Rr0_c_6l_vkAHG_0V1",
	"ServerDescriptionText": "_3zk6_T7REQSrGH7zSgWgvn"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1nFLaOkNVsQsEQWgw8D5Vn{display:flex;flex-direction:column;align-items:center;width:66%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AppBoard": "_1nFLaOkNVsQsEQWgw8D5Vn"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._2cUxHUPFx0DzY0NqgULKCn{display:grid;margin-top:3%;grid-template-columns:repeat(16, 1fr);grid-template-rows:repeat(6, 1fr);box-sizing:content-box;outline:1.5px solid rgba(116,121,130,.7);background:rgba(96,99,110,.6);overflow:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Board": "_2cUxHUPFx0DzY0NqgULKCn"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1pVcCb1_QS2Q8iS7DRGWtX{width:100%;flex:1 1 auto;display:flex;justify-content:flex-end;align-items:center;position:relative;z-index:200;height:5.5%;max-height:5.5%}._3vhLaAIqhiNAnxMKZPC3xw{font-weight:600;color:#15d598}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"BoardInfo": "_1pVcCb1_QS2Q8iS7DRGWtX",
	"CurrentCashText": "_3vhLaAIqhiNAnxMKZPC3xw"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._2FPqIB-wR0AgXgL5r_VXk-{width:100%;position:relative;box-sizing:border-box;background-color:rgba(175,171,171,.1)}._2FPqIB-wR0AgXgL5r_VXk- ._3LcT7hWay2gxdsqn_bsD5e{position:absolute;width:100%;height:100%;top:0;left:0;background-color:transparent}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"BoardSquare": "_2FPqIB-wR0AgXgL5r_VXk-",
	"MouseOverEl": "_3LcT7hWay2gxdsqn_bsD5e"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jdYNYRRTiZMC_JRWehw_J{box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.jdYNYRRTiZMC_JRWehw_J::-webkit-scrollbar{width:2px}.jdYNYRRTiZMC_JRWehw_J::-webkit-scrollbar-thumb{background-color:#3f77f5}.jdYNYRRTiZMC_JRWehw_J .jC1JM2mEcHc6jmVcUON9c{display:grid;grid-template-columns:repeat(16, 1fr);box-sizing:content-box;overflow:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ExternalBoardWrapper": "jdYNYRRTiZMC_JRWehw_J",
	"ExternalBoard": "jC1JM2mEcHc6jmVcUON9c"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._10--632rhgzA0V4xqa_uYL{position:absolute;outline:.25px solid rgba(109,114,125,.8)}._3-z9QcEuQAgg_d9FKfyoXt{position:absolute;top:2%;left:2%;width:96%;height:96%;pointer-events:none}._1Iu8RoLQ-Y-NIScJ6kB5lt{pointer-events:none;position:absolute;top:1%;right:1%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ImageContainer": "_10--632rhgzA0V4xqa_uYL",
	"Image": "_3-z9QcEuQAgg_d9FKfyoXt",
	"CurrentCountText": "_1Iu8RoLQ-Y-NIScJ6kB5lt"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1yqgo9K9lmXtQuysRFN6va{width:126.4%;height:100%;display:flex;position:absolute;left:-15.7%;justify-content:space-between;align-items:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"SquaresWrapper": "_1yqgo9K9lmXtQuysRFN6va"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._3q5HE8lb_MpSOkBFBo21C3{height:15%;width:100%}._3q5HE8lb_MpSOkBFBo21C3 ._2f8HYWGIjN-OKIh1ohniK1{width:100%;padding-left:22.75%;height:10%;box-sizing:border-box;display:flex;align-items:center}._3q5HE8lb_MpSOkBFBo21C3 ._1nqXJyR2S28pe0WMbBqBv7{height:9.15%;width:83%;background:linear-gradient(90deg, #3f76f3 30%, transparent 70%);clip-path:polygon(0 0, 20.657% 0, 25.5% 84.615%, 100% 84.615%, 100% 100%, 25% 100%, 20.357% 23.077%, 0% 23.077%)}._3q5HE8lb_MpSOkBFBo21C3 ._117Kt0hKM1Crf_UxHu3QSZ{width:66.4%;margin-left:20.92%;margin-right:14%;height:74.4%;display:flex;align-items:center;justify-content:space-between;position:relative;box-sizing:border-box;overflow:visible}._3q5HE8lb_MpSOkBFBo21C3 ._117Kt0hKM1Crf_UxHu3QSZ ._3IlYqrLYHZ0Z43BQBBvbJc{visibility:hidden;height:19%;width:5.7%;background-color:rgba(47,55,71,.3);clip-path:polygon(0 0, 100% 50%, 0 100%)}@media(min-aspect-ratio: 5/4){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:-1%}}@media(min-aspect-ratio: 4/3){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:0}}@media(min-aspect-ratio: 4/3)and (min-width: 1500px){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:-1%}}@media(min-aspect-ratio: 3/2){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:-2%}}@media(min-aspect-ratio: 16/10){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:0}}@media(min-aspect-ratio: 16/10)and (min-width: 1900px){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:-2%}}@media(min-aspect-ratio: 16/9){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:-0.2%}}@media(min-aspect-ratio: 16/9)and (min-width: 1900px){._2f8HYWGIjN-OKIh1ohniK1{margin-bottom:-0.7%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ClosingTypeContainer": "_3q5HE8lb_MpSOkBFBo21C3",
	"TitleContainer": "_2f8HYWGIjN-OKIh1ohniK1",
	"Borders": "_1nqXJyR2S28pe0WMbBqBv7",
	"SquaresContainer": "_117Kt0hKM1Crf_UxHu3QSZ",
	"Arrow": "_3IlYqrLYHZ0Z43BQBBvbJc"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._3RH2lEv0lvZQXkg7tY9-p-{width:100%;height:100%;position:absolute}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ClosingWeaponSquare": "_3RH2lEv0lvZQXkg7tY9-p-"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._3mzWL4GHMXLNerd-YcgxQw{width:16.94%;height:100%;box-sizing:border-box;padding-top:1.75%}@media(min-aspect-ratio: 5/4){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.7%}}@media(min-aspect-ratio: 4/3){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.7%}}@media(min-aspect-ratio: 3/2){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.6%}}@media(min-aspect-ratio: 3/2)and (min-width: 2300px){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.7%}}@media(min-aspect-ratio: 16/10){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.1%}}@media(min-aspect-ratio: 16/10)and (min-width: 1900px){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.3%}}@media(min-aspect-ratio: 16/9){._3mzWL4GHMXLNerd-YcgxQw{padding-top:1.8%}}@media(min-aspect-ratio: 16/9)and (min-width: 1900px){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.2%}}@media(min-aspect-ratio: 17/9){._3mzWL4GHMXLNerd-YcgxQw{padding-top:2.1%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"EquippedClosingInventoryContainer": "_3mzWL4GHMXLNerd-YcgxQw"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._9nCBPNUyynDgSw4DPFSyB{top:0;left:0;width:100%;clip-path:polygon(0 21.4%, 21.4% 0, 78.6% 0, 100% 21.4%, 100% 78.6%, 78.6% 100%, 21.4% 100%, 0 78.6%);background-color:rgba(53,73,94,.6);position:absolute}._9nCBPNUyynDgSw4DPFSyB:after{content:\"\";display:block;pointer-events:none;padding-bottom:100%}._9nCBPNUyynDgSw4DPFSyB ._2dcT7V1HmRZJ-56pkBIBD8{pointer-events:none;width:100%;height:100%;top:0;left:0;position:absolute;background-color:rgba(90,109,141,.5);clip-path:polygon(0 50%, 0 21.4%, 21.4% 0, 78.6% 0, 100% 21.4%, 100% 50%, 98.2% 50%, 98.2% 22.5%, 77.5% 1.8%, 22.5% 1.8%, 1.8% 22.5%, 1.8% 50%, 0 50%)}._9nCBPNUyynDgSw4DPFSyB .GlfPLSZqorwih4rTYWOhq{pointer-events:none;width:100%;height:100%;top:0;left:0;position:absolute;background-color:rgba(90,109,141,.4);clip-path:polygon(0 50%, 0% 78.6%, 21.4% 100%, 78.6% 100%, 100% 78.6%, 100% 50%, 98.2% 50%, 98.2% 77.5%, 77.5% 98.2%, 22.5% 98.2%, 1.8% 77.5%, 1.8% 50%, 0 50%)}._2v5Nz-FGy5pWtCF8jy66gX{top:0;left:0;width:100%;height:100%;position:relative}._2v5Nz-FGy5pWtCF8jy66gX:after{content:\"\";display:block;pointer-events:none;padding-bottom:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Octagon": "_9nCBPNUyynDgSw4DPFSyB",
	"TopBorder": "_2dcT7V1HmRZJ-56pkBIBD8",
	"BottomBorder": "GlfPLSZqorwih4rTYWOhq",
	"TransparentHoveEl": "_2v5Nz-FGy5pWtCF8jy66gX"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".zTXUVhT-NxF8KW3xdki4n{height:100%;width:100%;top:0;left:0;position:absolute;clip-path:polygon(0 21.4%, 21.4% 0, 78.6% 0, 100% 21.4%, 100% 78.6%, 78.6% 100%, 21.4% 100%, 0 78.6%)}.zTXUVhT-NxF8KW3xdki4n ._2j00eninKMfCVAjSYsjID-{position:absolute;top:10%;right:10%;height:80%;width:80%}.zTXUVhT-NxF8KW3xdki4n ._2d4q4wHWVZK7eFXZ2s7_EZ{pointer-events:none;position:absolute;top:12%;right:12%}._3BvH7Xdq1KCrpmi3GKNANw{width:54.45%;left:23%;height:76%;position:absolute;display:flex;justify-content:flex-end;top:12%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ImageContainer": "zTXUVhT-NxF8KW3xdki4n",
	"Image": "_2j00eninKMfCVAjSYsjID-",
	"CurrentCount": "_2d4q4wHWVZK7eFXZ2s7_EZ",
	"ClosingSquareWrapper": "_3BvH7Xdq1KCrpmi3GKNANw"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._3gu2jmAtWWuYOAvNMRyPoW{flex-grow:1;height:100%;box-sizing:border-box}@media(max-width: 779px){._3gu2jmAtWWuYOAvNMRyPoW{height:20%;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"EquippedWeaponsInventoryContainer": "_3gu2jmAtWWuYOAvNMRyPoW"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._31xDmxu1BLqg8pr2v7Re1J{height:25%;width:100%;position:relative}._31xDmxu1BLqg8pr2v7Re1J ._3o8pZFjoD5_fjmxBrwbVUv{height:20%;width:75%;display:flex;flex-direction:column;justify-content:flex-end}._31xDmxu1BLqg8pr2v7Re1J ._3wejykP9rDipAlQadSiRs2{height:40.78%;width:100%;background:linear-gradient(90deg, transparent, rgba(20, 91, 105, 0.7));clip-path:polygon(0% 10.56792%, 77.45% 10.56792%, 81.0447% 0%, 100% 0%, 100% 100%, 81.0447% 100%, 77.45% 89.43208%, 0% 89.43208%);position:absolute}._31xDmxu1BLqg8pr2v7Re1J ._3wejykP9rDipAlQadSiRs2::before{content:\"\";position:absolute;width:100%;top:0;left:0;height:12.5%;clip-path:polygon(0% 84.6154%, 77.45% 84.6154%, 81.0447% 0%, 100% 0%, 100% 23.077%, 81.0447% 23.077%, 77.8% 100%, 0% 100%);background:linear-gradient(90deg, transparent 40%, rgba(9, 198, 187, 0.8) 60%, #09c6bb)}._31xDmxu1BLqg8pr2v7Re1J ._3wejykP9rDipAlQadSiRs2::after{content:\"\";position:absolute;width:100%;bottom:0;height:12.5%;clip-path:polygon(0% 0%, 77.8% 0%, 81.0447% 76.923%, 100% 76.923%, 100% 100%, 81.0447% 100%, 77.45% 15.3846%, 0% 15.3846%);background:linear-gradient(90deg, transparent 40%, rgba(9, 198, 187, 0.8) 60%, #09c6bb)}._31xDmxu1BLqg8pr2v7Re1J ._4zMpqwjtAJMsZYN405ci{height:40.78%;width:100%;left:0;position:relative}._31xDmxu1BLqg8pr2v7Re1J ._4zMpqwjtAJMsZYN405ci .bVI00TDBEEn4korT7iIFV{width:54.45%;left:23%;height:76%;position:absolute;top:12%}._31xDmxu1BLqg8pr2v7Re1J ._4zMpqwjtAJMsZYN405ci .bVI00TDBEEn4korT7iIFV ._6yUw7tJHBy3pMBb-ANcpr{width:100%;height:100%;display:flex;align-items:center;justify-content:flex-end;position:absolute;left:25%}._31xDmxu1BLqg8pr2v7Re1J ._4zMpqwjtAJMsZYN405ci .bVI00TDBEEn4korT7iIFV ._6yUw7tJHBy3pMBb-ANcpr ._33q6_CcasHuNARna92cZ5G{pointer-events:none;border-radius:50%;background-color:rgba(70,106,127,.6);margin-left:4%;width:33.5%;box-sizing:border-box;border:1px solid #576c8a;position:relative;overflow:hidden}@media(min-width: 2400px){._31xDmxu1BLqg8pr2v7Re1J ._4zMpqwjtAJMsZYN405ci .bVI00TDBEEn4korT7iIFV ._6yUw7tJHBy3pMBb-ANcpr ._33q6_CcasHuNARna92cZ5G{border:2px solid #576c8a}}@media(min-width: 3500px){._31xDmxu1BLqg8pr2v7Re1J ._4zMpqwjtAJMsZYN405ci .bVI00TDBEEn4korT7iIFV ._6yUw7tJHBy3pMBb-ANcpr ._33q6_CcasHuNARna92cZ5G{border:3px solid #576c8a}}._31xDmxu1BLqg8pr2v7Re1J ._4zMpqwjtAJMsZYN405ci .bVI00TDBEEn4korT7iIFV ._6yUw7tJHBy3pMBb-ANcpr ._33q6_CcasHuNARna92cZ5G:after{content:\"\";display:block;padding-bottom:100%;pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"PhoneAndSimContainer": "_31xDmxu1BLqg8pr2v7Re1J",
	"TypeAndWeaponTitle": "_3o8pZFjoD5_fjmxBrwbVUv",
	"WeaponSquareContainer": "_3wejykP9rDipAlQadSiRs2",
	"TransparentHoverEl": "_4zMpqwjtAJMsZYN405ci",
	"SquaresContainer": "bVI00TDBEEn4korT7iIFV",
	"CirclesWrapper": "_6yUw7tJHBy3pMBb-ANcpr",
	"Circle": "_33q6_CcasHuNARna92cZ5G"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._3No_gt6zZxcWGHGJJ4b2iB{height:25%;width:100%;margin-right:0;margin-left:auto;position:relative}.IwJ_PV9sKQnRfa4AFqB8Y{height:20%;width:75%;display:flex;flex-direction:column;justify-content:flex-end}._2dPeruPjvTWEtqJDYI0fqs{height:40.78%;width:100%;background:linear-gradient(90deg, transparent, rgba(53, 78, 163, 0.7));clip-path:polygon(0% 10.56792%, 77.45% 10.56792%, 81.0447% 0%, 100% 0%, 100% 100%, 81.0447% 100%, 77.45% 89.43208%, 0% 89.43208%);position:absolute}._2dPeruPjvTWEtqJDYI0fqs::before{content:\"\";position:absolute;width:100%;top:0;left:0;height:12.5%;clip-path:polygon(0% 84.6154%, 77.45% 84.6154%, 81.0447% 0%, 100% 0%, 100% 23.077%, 81.0447% 23.077%, 77.8% 100%, 0% 100%);background:linear-gradient(90deg, transparent 40%, rgba(63, 118, 243, 0.8) 60%, #3f76f3 70%)}._2dPeruPjvTWEtqJDYI0fqs::after{content:\"\";position:absolute;width:100%;bottom:0;height:12.5%;clip-path:polygon(0% 0%, 77.8% 0%, 81.0447% 76.923%, 100% 76.923%, 100% 100%, 81.0447% 100%, 77.45% 15.3846%, 0% 15.3846%);background:linear-gradient(90deg, transparent 40%, rgba(63, 118, 243, 0.8) 60%, #3f76f3 70%)}._2pRhiEsXSf1TJSJXXoZWb_{height:37%;width:87%;margin:0 auto;position:relative;display:flex;align-items:center;justify-content:space-between;overflow:visible}._2pRhiEsXSf1TJSJXXoZWb_ ._30HeofzZAkvtc1_5hj1Eyv{visibility:hidden;width:4.5%;height:16%;background-color:rgba(47,55,71,.3);clip-path:polygon(0 50%, 100% 0, 100% 100%)}._3t5_PTZ1DfEMDKHkaD66xY{height:40.78%;width:100%;position:relative;left:0;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"WeaponTypeContainer": "_3No_gt6zZxcWGHGJJ4b2iB",
	"TypeAndWeaponTitle": "IwJ_PV9sKQnRfa4AFqB8Y",
	"WeaponSquareContainer": "_2dPeruPjvTWEtqJDYI0fqs",
	"AttachmentsSquaresContainer": "_2pRhiEsXSf1TJSJXXoZWb_",
	"LeftArrow": "_30HeofzZAkvtc1_5hj1Eyv",
	"TransparentHoveredEl": "_3t5_PTZ1DfEMDKHkaD66xY"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ffOaH_mh251SLq2YR0FG8{width:100%;height:100%;position:relative;overflow:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"EquippedItem": "ffOaH_mh251SLq2YR0FG8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1MbR1p2XFKLE0nKlwnCL9O{width:100%;height:100%;position:relative;z-index:200}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"BackDrop": "_1MbR1p2XFKLE0nKlwnCL9O"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1AIfihwA3rdBeCE5zXaAzk{color:#fff;margin-left:1.5%;white-space:nowrap;font-family:BebasNeue-Bold,sans-serif;font-size:14px;letter-spacing:.03rem;line-height:17px;text-overflow:ellipsis}@media(min-aspect-ratio: 4/3)and (min-width: 1500px){._1AIfihwA3rdBeCE5zXaAzk{font-size:14px;line-height:20px}}@media(min-aspect-ratio: 3/2){._1AIfihwA3rdBeCE5zXaAzk{font-size:20px;line-height:23px}}@media(min-aspect-ratio: 16/10){._1AIfihwA3rdBeCE5zXaAzk{font-size:14px;line-height:17px}}@media(min-aspect-ratio: 16/10)and (min-width: 1900px){._1AIfihwA3rdBeCE5zXaAzk{font-size:15px;line-height:20px}}@media(min-aspect-ratio: 16/9){._1AIfihwA3rdBeCE5zXaAzk{font-size:13px;line-height:16px}}@media(min-aspect-ratio: 16/9)and (min-width: 1900px){._1AIfihwA3rdBeCE5zXaAzk{font-size:15px;line-height:18px}}@media(min-aspect-ratio: 17/9)and (min-width: 3800px){._1AIfihwA3rdBeCE5zXaAzk{font-size:30px;line-height:32px}}@media(max-aspect-ratio: 17/9)and (min-width: 3800px){._1AIfihwA3rdBeCE5zXaAzk{font-size:30px;line-height:32px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LeadText": "_1AIfihwA3rdBeCE5zXaAzk"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._3Bq9umQcrBgBK-0m21N8Ah{width:100%;font-weight:300;color:#f0f0f1;font-family:Montserrat-Light,sans-serif;white-space:nowrap;text-overflow:ellipsis;letter-spacing:-0.02rem}@media(min-aspect-ratio: 5/4){._3Bq9umQcrBgBK-0m21N8Ah{font-size:12px;line-height:12px}}@media(min-aspect-ratio: 4/3){._3Bq9umQcrBgBK-0m21N8Ah{font-size:10px;line-height:16px}}@media(min-aspect-ratio: 4/3)and (min-width: 1500px){._3Bq9umQcrBgBK-0m21N8Ah{font-size:15px;line-height:16px}}@media(min-aspect-ratio: 3/2){._3Bq9umQcrBgBK-0m21N8Ah{font-size:17px;line-height:20px}}@media(min-aspect-ratio: 16/10){._3Bq9umQcrBgBK-0m21N8Ah{font-size:14px;line-height:16px}}@media(min-aspect-ratio: 16/10)and (min-width: 1900px){._3Bq9umQcrBgBK-0m21N8Ah{font-size:14px;line-height:16px}}@media(min-aspect-ratio: 16/9){._3Bq9umQcrBgBK-0m21N8Ah{font-size:14px;line-height:16px}}@media(min-aspect-ratio: 17/9)and (min-width: 3800px){._3Bq9umQcrBgBK-0m21N8Ah{font-size:23px;line-height:25px}}@media(max-aspect-ratio: 17/9)and (min-width: 3800px){._3Bq9umQcrBgBK-0m21N8Ah{font-size:23px;line-height:25px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"SecondaryText": "_3Bq9umQcrBgBK-0m21N8Ah"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 1667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 3389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/BebasNeue-Bold.otf");

/***/ }),

/***/ 8718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/BebasNeue-Regular.ttf");

/***/ }),

/***/ 1664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/Montserrat-Bold.ttf");

/***/ }),

/***/ 4294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/Montserrat-Light.ttf");

/***/ }),

/***/ 7664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/Montserrat-Regular.ttf");

/***/ }),

/***/ 3661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/Montserrat-SemiBold.ttf");

/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/Montserrat-Thin.ttf");

/***/ }),

/***/ 8679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(9864);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 2589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 7418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 2703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 4448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7294),m=__webpack_require__(7418),r=__webpack_require__(3840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.1";


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 9921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 9864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(9921);
} else {}


/***/ }),

/***/ 6213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Provider": () => /* reexport */ components_Provider,
  "ReactReduxContext": () => /* reexport */ ReactReduxContext,
  "batch": () => /* reexport */ react_dom.unstable_batchedUpdates,
  "connect": () => /* reexport */ connect,
  "connectAdvanced": () => /* reexport */ connectAdvanced,
  "createDispatchHook": () => /* reexport */ createDispatchHook,
  "createSelectorHook": () => /* reexport */ createSelectorHook,
  "createStoreHook": () => /* reexport */ createStoreHook,
  "shallowEqual": () => /* reexport */ shallowEqual,
  "useDispatch": () => /* reexport */ useDispatch,
  "useSelector": () => /* reexport */ useSelector,
  "useStore": () => /* reexport */ useStore_useStore
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var ReactReduxContext = /*#__PURE__*/react.createContext(null);

if (false) {}

/* harmony default export */ const Context = ((/* unused pure expression or super */ null && (ReactReduxContext)));
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react.useMemo)(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0,react.useEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (false) {}

/* harmony default export */ const components_Provider = (Provider);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(9864);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (false) { var customStoreWarningMessage; }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is.isContextConsumer)( /*#__PURE__*/react.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react.useRef)();
      var lastWrapperProps = (0,react.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react.useRef)();
      var renderIsScheduled = (0,react.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react.useMemo)(function () {
        return /*#__PURE__*/react.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react.forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(4890);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return (0,redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ const mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ const mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ const mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ const connect = (/*#__PURE__*/createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = (0,react.useContext)(ReactReduxContext);

  if (false) {}

  return contextValue;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return (0,react.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore = /*#__PURE__*/createStoreHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0,react.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0,react.useMemo)(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0,react.useRef)();
  var latestSelector = (0,react.useRef)();
  var latestStoreState = (0,react.useRef)();
  var latestSelectedState = (0,react.useRef)();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState);
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return (0,react.useContext)(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (false) {}

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    (0,react.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js










setBatch(react_dom.unstable_batchedUpdates);


/***/ }),

/***/ 2408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(7418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";


/***/ }),

/***/ 7294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(2408);
} else {}


/***/ }),

/***/ 8500:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var compose = __webpack_require__(4890).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ 3894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ }),

/***/ 4890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => /* binding */ ActionTypes,
/* harmony export */   "applyMiddleware": () => /* binding */ applyMiddleware,
/* harmony export */   "bindActionCreators": () => /* binding */ bindActionCreators,
/* harmony export */   "combineReducers": () => /* binding */ combineReducers,
/* harmony export */   "compose": () => /* binding */ compose,
/* harmony export */   "createStore": () => /* binding */ createStore
/* harmony export */ });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7121);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 9277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3778);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 3852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7194);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 1339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CommonItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2778);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CommonItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CommonItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 6818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Overlay_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1139);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Overlay_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Overlay_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4282);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeComponent_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1415);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeComponent_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeComponent_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 4007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UniqueServerDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3925);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UniqueServerDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UniqueServerDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AppBoard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1695);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AppBoard_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AppBoard_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Board_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2084);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Board_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Board_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 5184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BoardInfo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1431);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BoardInfo_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BoardInfo_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 2652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BoardSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(818);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BoardSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BoardSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ExternalBoard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9601);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ExternalBoard_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ExternalBoard_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 9117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SquareCommonItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SquareCommonItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SquareCommonItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 4575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AccessoriesTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3638);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AccessoriesTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AccessoriesTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 1157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ClosingTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ClosingTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ClosingTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 8947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ClosingWeaponSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4445);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ClosingWeaponSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ClosingWeaponSquare_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 6803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedClosingInventoryContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6417);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedClosingInventoryContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedClosingInventoryContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 1298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Octagon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1859);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Octagon_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Octagon_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 7050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SquareEquippedItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6090);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SquareEquippedItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SquareEquippedItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 1165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedWeaponsInventoryContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5810);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedWeaponsInventoryContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedWeaponsInventoryContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 3575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PhoneAndSimContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1223);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PhoneAndSimContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PhoneAndSimContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 9176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_WeaponTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2837);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_WeaponTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_WeaponTypeContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9449);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EquippedItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 2004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BackDrop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2238);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BackDrop_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BackDrop_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 3599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LeadText_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1721);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LeadText_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LeadText_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 2107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SecondaryText_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2490);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SecondaryText_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SecondaryText_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 3379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 7121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => /* binding */ es
});

// CONCATENATED MODULE: ./node_modules/symbol-observable/es/ponyfill.js
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

// CONCATENATED MODULE: ./node_modules/symbol-observable/es/index.js
/* module decorator */ module = __webpack_require__.hmd(module);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof __webpack_require__.g !== 'undefined') {
  root = __webpack_require__.g;
} else if (true) {
  root = module;
} else {}

var result = symbolObservablePonyfill(root);
/* harmony default export */ const es = (result);


/***/ }),

/***/ 1101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAjBSURBVHic7Z1fbBxHHcc/Z9/ZuXN8tuOzQ2SfbZJQBVJaWpKQOKEVLyDUFlVCoFY8gISUviCBBAjEvwf+SCDEEy+AhIQAiReEqIQAlQKFJo6bBFB5aCQKqI2dFP+5/LETn+u/PFzubmfubu9md+bO5/19pJVu5nZnZ3e+N/Pb3292DgRBEARBEARBEARBEARBEARBEMx4DJgFtg2368ATLahvs/kQhWs1vT8zwAdbUF9jZjC/uOKWA9LNr3LTSFO4xqD352rzq2xO0Isrbl9pfpWbxlcJf392PGEv8CbQ3/Rauyfsr9+JAOK2C9R53/v9h62NjQ2mX3yB9fX1YlY/8Cngm46r1mw+DewrJuLxBKceeZR4POF70J+f+53TSnU4Lb0B4vE4o+MTevZn2V29QBr4jDcjOzFRt/GbQcsFADA6NkEiodyMYi+wW6j49Y+OjbewOmV2hAB2eS+wY3/9QQn6nC+b2y2QnyBmesC9E40GOE5wzwwwZnJAEAFYfxQRrGLUpjvCBhBaRzU/wGPAD4GRRgp4+hOfVNK/+MmPnX7falxfn+n16/ubUq0H+AENNr7Q/lQTgBh4EUJsgIhTNxag+/Jd+6brMfP6a/xt+gL5/IrVcpOpFMdOTu4YD12zaLse4PL0lPXGB8ivrHB5esp6uTsd6wJIplJVP9v6XrCLdQEcOzlJMpUqdalOvk/aF0at8+12rM8HGB0b9x1Hw36fHZ8gWxk4EgLSdjaAYBcRQMQRAUQcEUDEEQFEHBFAxBEBRJxqs0dkxs/uYBY4C/gGb0QAu5u6cwSrDQGzbuoitIBsvR2qCeAsIoLIEGRWsI4yZHztW9+xUGSZr3/5C0q63ruGUafKfA3fNpangIgjAog4IoCIY30+gD5mCzsb6QEijg0ByCNjG2NDAOI3aGNs+AFcI67pcIgfQKhNOwhAhpfgzNTboR0EIDZGMGYo3Dtf2sEGCItuQ5hc83eBzxUTYxMHiSfi/PfVf5V2eOuhw5x876PhamjAK/98mZf/ftmb9VPg40HLc75QZJvzbm+iN52mq7tb2WFhfr6pFcrs369nnQ5TXjsMAa0iBjzkzehN95Hu66Ojo3zb7iwvOXlZtRaDmSHl/MAh4EDQ8kQAtTmEZ53CeCJBMpWio6OTvb3qguaLTewFOjs7GRgc1LNPBS1PhoDaqN2/p9H7+gdYun2rlF6cn6v5vuL12RkuTp0jFotxYvIMB0YaW4DF77ih4f3kFha8u58GftVQwRrSA9TmEW+iN60KwMvC/FzNQi5dOE9+ZYWVu3e5OHWu4ZP7HZcZtmcHREEAy1q6p4FjuoCPejP6BvZ5Pqsr2N7M5djc3AxYPXOGKgXwEBDonfkoCOC6lj7awDHfADLFRGc8zsC+8rjb1dWtLF6xtbWld8klTkyeIdXTQ6qnhxOTZxqutN9xe5JJpUeiINjjDRfuoTPIQW3GSeABTzoP/N5n/6eB7+HxF4xmx8gMDSs7LS8tcWe53Ln0pvsY3v+WisJ602mOHL2fI0fv1xvNl3rH3cjluHXjhjfrVeDFhk9wjyj0AM9q6WeAd9XY9ykKjpVS43d1dTN+8HDFjrodsOhjB7ggMzysZwVa3iQKAvg18G9Puhv4LZUieAr4GZ4no1gsxjseeFD/LwOgmgDm2d5uXuCyih0wSYD2jIIA1oHPa3kHgJeA71MYIj5GtcZ/54PK2O+lZ+9eRRhra28qj4au6esf0L2SA8DbTcuJQiygyLcBpxMWj0+e5vB9R5S8N67NcnHqHCt374YqO5lKcfzUaUay5Te9/vL8c1yfVQJ+zwA/Mik3Cj1AkS8Bdt9a0Vicq7QDLk6dD934UFjH8NLUeSWvyjBg7A+IkgC2gC8CT1KwmK1TLTC0ublhrfx8fkUZZmwEhqIkgCLPUvAFfAT4OXAFuGOj4DvLS6zm80revsFMjb2D4Y071AgMVT6L+hDVWMA68Mt7W1imgfcUEwtaXCAzPMwb18rzWR4+foLHn/xww4X/9U/P88If/1BKLy7Mc/Bt9wHlwJDmhJrEIC4QxR7ANsrArPsDdAfS7FWzv//VF81cXFCHmbB2gAggPIoA9MDQ4NAwsVhM+f7N1dWGCx/JZol5uvmlW7dYX1srpcMGhkQA4VEEcDOXY3OjbPglEgnS/eXg0fb2Ntdm687VLNHdvYchTy+yvb1NbrHc5VfpAR7GIDAkAgjPHPCfYmJra4tcblHZoXIYeN3oBKNj6iov3mFgTzKpT1BJAMcaLVsEYAfVDpirYwfMGNoBWU0A87odUBEXaDjsKAKwg68doAduZq9eNYob6IZgbkGNO4TxB4gA7KBM2dEDQ+m+fsVvv7qaJ7eoDhN+ZDJDyn8krK2tsbx0u5QOExgSAdjhClAKzlcLDA1mhpS0kR0QizGSVRf88g4DVQJD/TQYGBIB2GEbuODNqDsMzBgagrodoPkDdDuDBocBEYA9zAzBHeIQEgHYQzME1QZy7hAKaAiKAOxxCSi1iP7GkGuHUNA3hkQA9sgD//Bm6M/rof0BPg6hoG8MiQDsYhgYMjUENTugwiFkPgyIAOzSWoeQCKDl+AaGwjuEMqYOobqBIRGAXeoGhlw6hIIEhkQA9vH3Bzh2CFUJDPkOAyIA+/jbAY4dQqb+ABGAfbQnAdVQc+0QqvEkULOdRQD2eYWKwFDZUKvqELpmzyFkGhgSAdinIjBkf6KovcCQCMANhnaAXYeQiT9ABOAGVQD1ngQsO4SGDAxBEYAbfANDrh1CJoEhEYAb6gaGXDqETAJDIgB3+AeGnDuEGhsGRADuaKpDKKc/CYgAWo5vYMi2Q+h2fYdQ1cCQCMAdvoEhNw6hcvmNBoZEAG5xPFFUtwPU8k0DQ4J9zlLwDO6U7TduL1fQOUrrG927VSxiJEOAW64A/2t1JTyEX61KMOZxCv951Opf/2vAB9xeqiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIreL/QHdQj9owOmAAAAAASUVORK5CYII=");

/***/ }),

/***/ 3528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2Zw0KICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8aW1hZ2UgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiAgeGxpbms6aHJlZj0iZGF0YTppbWcvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZThBQUFCNENBTUFBQURzUTRxd0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQ2FsQk1WRVgvLy85RUt5UXdFZ2tTREFkVE55d1hBd00wRUE0YURndytLeVlVQVFBbkVBMG9BQUJFSEJnWUJ3TXJEQXdWQmdKV0ppUVZBZ0UyQ2dKZUdCSXNFd2tWQkFBZEFBQTFEUWtlQmdFMUVRVkdGd29KREFFWERBb3pEQWtZQ0FKRkppWWlCd2NkQVFBZUFBQWJCUUVXQ1FKblBENFNBQUFURGdjY0JBQWRDQVVhQlFJb0FRQmFGZ3hYSXhzWEJRQkVFZ2M5RWcwYUNBSVhDZ1FkQndFaERnWXJFZ2NZQWdBZENRRVRCUUFZQ3dBb0J3QkhEQUpZR3c0NEV3SVlDQUFaQ3dJWUNRSVVCZ0UzRGdVdEJRQStFUXRaR2hjakFnQWlCZ0VnREFBWEJnRVpBUUFaQ2dBVURRRVVEUVFXQXdKSEtTMVVOenNiRkJOQUpDMW1URk1aQnd3akV4ZGlRazRhQ2c4QkRBWWVCUVJKR3hvOUhocE5LREEvS0NRWUFBTkhJQ2MySGg0akdScEJKQ2RITHpNZkFRUWFGUllSREE0b0l5VVZBUUpBR3lBZEJRY3JKQ1k2RUJJWUZSY1ZFeE5rT2pvakVRMGJBQUV4S0N4V1AwZ3VJaU1YRHhFcEdCb0xEQU1UQVFBbEFnTWtDQVlXQ3dndEhScEZJeUVYQmdBT0RnNDhKUnBXTFNjVEV4TVNEZ29oRnhVVkFRQWlEdzR2R2hvMEl5QVpCQUlrRlJBaURReGhQa0NXYUZseVBDZDdUejZSV2tXWWNXTjlSRVNqVFU3R2NtNktTVU9PVEVXT1IwYVdWRXpXZ0h4cUxTU3BURGpVVkVTM1VENkZPVFJ3SFJnOEJBQzlmWCtUYTJxd1RqakliVmlzVERYdGRsTG9jaytzVXp0K1B5amhlMWk3VlROZUdBa2hBQUFhQkFCZUZ3NkFLUjY2UFMvTFFpN0dVRU4rTVN1WlBEVEVSenV5T3lDWk9TZEdFQWxWRkFsQ0VRRXVFQUN0YkhhR1RreDhTRUNKVWwxMFNFUytjSG5BZjRWNlJVT1laR055UjBPZFhGS3FUMG1XU1VhZVVrclJaRjZ3WVZQLy8vOUhkZG1NQUFBQWpYUlNUbE1BamxNR3VBeGZFbjBHTlVlT0RFRUd4QVpsMjBjTUpGOGtYNVFHQmxrTWppb2tLaGdHOHdZTUhoZ1NRZERFRW81M0VnWWVKRUVTSGdZU1FacktheElTREFabFUzM0tOUzhxREJnWURBWUdsTDRlZ3ZNTUt1Y1NEQjZhZDZaOUdKUmxLb0tVS2g0R1RReUNHRTF4SkJqdEtoNWZ4RTBTT3dZR05TOEdSNDRTREhmRUdBd2tEQ3BOWHhJdkt1Rm96RmpqQUFBQUFXSkxSMFFBaUFVZFNBQUFBQWQwU1UxRkIrUUpFQmN6QllGZzRwQUFBQUk0U1VSQlZIamE3ZERsVnhWUkZJYnhNUkVUbGF0aXQ5aGdkM2VqZ0Iwb2RuY3IyTjJKaU5oZGlHSVh0djVSZm5INWdYWFg4b3JEZnAyNXorL2pPWHZ0ZWM0NER2eWlXSEYxQVN3ZFBLUXVnS1hEUjlRRnNGUENLWGxVM2VBbHBZNlZWaWY4bzRneTZnSXZpVHgrb3F5NkFZYktuU3l2VGdBQUFBQUFBQUFBQUFBQUFIQlpoVk9uSzZvYllLZlNtYk5SNm9ad1VibEsxWXhvY1VPZ1d2VWE2djhRTG1MT1paNnZxWTc0ZTdVY3A3YTZ3WlBxWkYzSXJxdU9LSXg2Rit1ckV6eXBRY05HamRVTmhYR3BpYm9BcHBxcUF3QUFBT0Jyelp4QWJITjFCS3kwYU5ucThwWFc2Z29ZYWRQMjZyWHJOK0xVR2JCeTg5YnRPM2ZqMndXN2ltOGZVTmZCYlIwNmRyclh1VXVRaTY3ZHV0L3YwYk9YdWc5dTY5Mm5iN0RqZmc4ZTVqeks3YSt1ZzVFQmo1L2tQUjA0U0owQkk0T2ZQWC94Y29pNkFsYUdEb3NkUG1La3VnSUFQR1BVYUhVQlRMMGFveTZBcVFSMUFBQUFBUERmR2pzdVVaMEFRMG5KNDlVSitHV0NPZ0MySms2YXJFNkFuU212MzB4Vk44RE10T2t6MUFrQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlNCbEpucUFsaWE5VlpkQUZPcDZnQUFBTncwV3gwQVMzUG1xZ3NLbURkL2dUckJ6eGFxQXdwNjkzNlJPc0hIRmk4SmRybzBYMWUwYkhrSVF5dFc2Z0o5S0dHVnV1QVBWcTl4bkxXQzc2NWJ2MEg5ZEZqWnVHbnpoNCtmMUJYaGFvdGJpN2FHT0pmMitjdlhkUFdydzFla1c0dTJoVGkzZmNkTzlac0JBQUFBQUFBQUFBQUEvTFpyOXg1MUF1enMvZmI5eHo1MXhQNERSYlAzSjA3RVVveTF1SDY3QUFBQUFFbEZUa1N1UW1DQyIgLz4NCjwvc3ZnPg==");

/***/ }),

/***/ 7992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2Zw0KICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8aW1hZ2UgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiAgeGxpbms6aHJlZj0iZGF0YTppbWcvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBbU1BQUFBNkNBTUFBQURMQ0s1WkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQnlGQk1WRVgvLy85RUt5UXdFZ21XYUZseVBDZDdUejZSV2tWVE55eVljV045UkVRMEVBNCtLeVluRUEwb0FBQ0tTVU5FSEJoRUZBTlNIdzh2RFFWVkd3YklaVFhZY2tsZ0p4SlBGQVhRWVRiL2R6djZmVXBrS0E4dEJRRzFWajMrZEViNmRrQ1dPaDBxQmdBMUNnTzhYMG5tY2t5ZFFoNDBCZ0JMRmd0YUlBMHlDQUNEVkRoWk55T1RTeW4rcUhGa01SdDROUjcvcVhPUVFpRm9LUkh0bFYrOWFEZ3BBd0FuRHdaUUZBWGtoMUxhZ0U4K0N3SW1DZ3MxQWdEUGVVWHRrRmRmSUFrb0JnS2pZRC83b0dabUp3K09URVdPUjBZckRBd3dGUXU0ZlZ4NE95Q1dWRXhXSmlRc0RBQTJDZ0plR0JKcUxTUXNFd2sxRFFrMUVRVkdGd296REFtRk9UUndIUmc4QkFCRkppYVRhMnBuUEQ0b0FRQmFGZ3hYSXh0RUVnYzlFZzErUHloZUdBa2hBQUFyRWdjb0J3QkhEQUplRnc1WUd3NDRFd0kzRGdXQUtSNStNU3N0QlFBK0VRdVpPU2RaR2hjakFnQWlCZ0ZHRUFsVkZBbENFUUV1RUFCSEtTMVVOenRBSkMxbVRGTmlRazVKR3hvOUhocE5LRENHVGt4OFNFQS9LQ1NqVFU3R2NtN1dnSHlwVERqVVZFUzNVRDY5Zlgrd1RqakliVmlzVERYdGRsTG9jaytzVXp2aGUxaTdWVE82UFMvTFFpN0dVRU9aUERURVJ6dXlPeUN0YkhiLy8vOHpVeWFVQUFBQWdYUlNUbE1BUlJ6cm9yTGZZZSsySkRrSUVOSkZBZ0lCQXdjSEF3TUlDQWNFQVFrSkNRa0JBUW9MQ3dJRUJnSUlCQW9NQnd3TkR3OFFEd0VCRVJJU0JBRURGQlVLQVJjWURkdmJFQU1iRSt0cEF5aDVraFFrSkVrZ3hwNDVSZU9LRUhGcFJUVzZlUVFRRUUxNWJTMG92cm9jT2U5dENBUkpaVVVjU1dVOWlvSk5OVlhLdGptb3g4RFRBQUFBQVdKTFIwUUFpQVVkU0FBQUFBZDBTVTFGQitRSkVCY3hOZ3lHNFFRQUFBR0dTVVJCVkhqYTdjNW5OeFlBSElieEp6S3pFeUtyckJUSnlCNkZ5S2FRTFJySWlvVEtLaU16SXo1dm4wRFBPWjZjbTcvcjkvWjZjemtjd0htNjVxWStnSFh1MTlVSHNNN0RVMzBBNjd5ODFRZHd3c2RYZmVDcUcrb0JPTEh5dzArOUFPUDhBd0xWQ3dBQUo0S0NROVFMc08xbTZLMHc5UU5NQzQrNEhSbWxub0JsZDZKall1UGkxUmV3N082OWhNUWs5UVJzUzA2NXIxNEFBT0JDU0gyZ1BvQnhEOVBTMVF1dzdWSEdZL1VDYk12TXlzNTVvcDZBWmJsNStRWHFCMWhXV0ZSY1VxcWVnR2xsVDUrVnF4L2drb3JLNStxRmY2dXFmcUZlZ0d0cWZ0YXFGNXlvVXc5Y2F2VU5qVTNxQjBlemVnRG5xR1YxYmYybGVnS212V3B0YTFjL25NbnJEZlVCck92b1ZCOEFBQUFBQUFEZ3YrcnEvclhabzU2QVpiMWIyenU3ZmVvTFdOYS85L3ZOZ0hvQ3RnMmVGdDYrZS85aFNIMEh5NFpIOWc4T1A0NnFOMkRZMk5HZjQvR0pTZlVHRFBzME5mMTVSajBCQUFDdW5DL3FBWmgzTXFzK0FBQUFBQUFBbDhqY3ZQb0E1bjFWRHdDdzdkdDM5UUZzVzFoY1dsWS9LUDBGY1lRc1BzQXFuTTRBQUFBQVNVVk9SSzVDWUlJPSIgLz4NCjwvc3ZnPg==");

/***/ }),

/***/ 3962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAB0ElEQVQ4ja3VS4iOcRQG8N/wSZJcakRTotwWSmrCYhYk5LIhuWwM5bLB1sbCwoZslEQUs7NQViNsSJSwEoXUSMlC7vSFGXR0Pn3G+39tPJu3vvOc5z3nfOc8b0fnw5NqMA7LsACTMYSXuIMb+FKV2ijoTcFBbMWYAucNTuAIPrYHRlSQ1+ERdtcIBibhAB5gYZ3odlzA+Bqx4ZiG61hSJdqD04XqA4fRV4hFRxcxXdtM43kGIysSBnEqXzghBTZW8CJ2HGtbVW3GnEIVu7AHH/AMm3KWVViD7lal2wqk19lyJwbyt27cLvADvY1svadAeIXvaKboPNzD2BrRpdF+F0YXCDGSufiE+ViFWzWCgdkhOrGG0IFLWI0fuIyV2FKTMypE3/7jzTPQj8fYlxtyvqbibyH6onTDuI+9uIpZOBYzy9hAIedJI/fwZhrHcDRz967k8n/F3RzL4oLotdaenisQFmE/nmJ97vNnHMXMQk5fy/oaaQylA4hWd2BqVtxV4PW3X9RgJg0VyPFnrcDyGsF3eXl/mEfMdWcuexViDL2FWDMtM874L0c6iw14X0iuwvO0vbC/X6iyubCwuKJwpqighHD+Q3m68Xn5jf//jcJPOrdiOhF1WhIAAAAASUVORK5CYII=");

/***/ }),

/***/ 675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAOCAYAAADXJMcHAAAEOElEQVQ4jaWUa2xURRiG35lz3bO73S7dlrZs6WXpQi/QNrg11rVsGgsaqs0iaFo1lorGxIj+8kLgl6iAiYkgURPSH8ZQLzGlQVFDSJBgWQQ3ECO9aYl0baWpFVu23T3nzBlz1nCzmKC8yTk/ZuabZ+b73m8IbkPRUNAN4CGHqnQaprmSAIZhsvaeU0OHbrZrNBT0AlgNYAGAA/8LHg0FA4osbTEZezw/18siDTXq0jI/xi5OYV/3l4ZlWZs+Ozn4wU3iNmd7XLvyc73kl8TEReE/QpfUBQq6OOe7w/XVNYQQqaJ8sbihpRELvFko9i9EoKRQiMUHWqr8vtkfE5MnrosVBYE+VVcVqOp4eI168HDMI94iNKjI0sv2TUMrguS7M4NC0921cLkceOWNLqy6a0UGbCvLpYEAAqF0R9s91Y3gGJMlsXgurYd93ix57b13Klf2/Vd4NBRcLlB6v6LIj6Z1vbKifDGGRhLiI60R+Atz0d17FFufb8fOLU/C63FnYhLjk9j+9n5zfUujUFe9RIx9f+5Bk1nwuDWUly6ys4JUWkff6XOZ9eQ6WAMhpNmhKhHTNFdanGuV5cWWqkjS5NQ0Xn2xA+9/+AUK8rxoXdOAtG5AkaWrhx34aRRvvvupeV/kDmHDA43zvHQ5OYeeQ8f4kW/P8gUukf32R1oi0VBQ0xShh3MeqS1z8/hIUqoMlpDnOluJqsgZyM69H+OFTeuQ5dbmZcgwGXq/7uMHD8f4E+ubaVO4dt6aoZEE3nrvE1bhV/ljTQWiJBA8804/RIdMd/t9SmRbW5nsVAWMTqaw5/NxffO2vTQcqqYlRfm0PdoEUbzRm8yycDI+gI96jxpup4O/9tJG2V/gmwceuTCOHXu6rY3N+UJzXU5mbOKS/nfNDcbbOlcvyoBtFflU7OoolQdGkzg1nMCJvp9TY7+n6eSfc5LP6zZqqgKiqsjk2MkfTIeq8PVrw3K4fjkond+1jFnY29VjrmvwiVfA18s2HBlMJFGYo8ClXrvdsiJn5gOg2r+UYWEokZTPnh/jffEZfXpmVgkUF+qSJEI3DNgl+qdi8X4wI8WjDcU3zOimZZuNk3Wh4AEOtNqDXreqF/pUluMSlGyNUpdDgCoL0BR6NdCulyxRjE+lcXp4Gv2jSU4ptWoqA2ZddUCRRAG2w22vHI+dZTJmhaWLNPvw1pxusWSKsQsTKTqbZt/YhiuVJLEvP9frq69bJubleDB16TKmZ5JIzqWM5GyKpdM6T+nGtXSajOuGQR2qYtkNwwHLzqBAKdEcCiWEwKmpAiGAyyFLiqpmOkOWJTgdCo4cP8OGz/+6PVOoaCiYLUviVg48LYmCvHxZKS0pWijl+bIzPez1uEAphVO7+j7clvbt/8qIxftfv8El0VDQLvpKAKs0h1pPCCoYsxaajDkty5Isi9/Si3hLAp79C3JFj+0fJ5DYAAAAAElFTkSuQmCC");

/***/ }),

/***/ 1630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAATCAYAAACORR0GAAADfUlEQVQ4jaWVW2gcZRSAvzOX3c3uZtJc3LjEkLYxNq1GLabxQdumQn3QWMRWhFJ9Ea3SChIr4qP1oS+6JYEKpaARLKUgqBTEF6UtClVBajQlRHJTSaxJutncdjezM0c2SRtisklKD/zD/P+cc75z+Q8j3IEYJ7XREr4GAgJHsm/K2ULebh+UUBPYWR5ityqvKsQiJjqaJZnx2E6rDN0ZKKEV1VFOpD0OFdvY/ROYe6uVg3VweQg6uoWyEDnH5tf+SQ7SKj23DQq366GwzZnXGwg9drfPy98aHG9SnqrRWzqvXRIaY2D40Pa75IIGib8OyzvrTmTDKT26tUPdnjFf+0c83fKx6rnffB2+4S1ZPwx4en+Hzr3/NODpo5/5/j2n9fxNP8Ya5WqI2Hz43QEsx1DaO4WdcaW5SpepbnZgyoVJF6odOL1LpSzIgYqP9MiaoHiETxK7CYRUSWXh3B/Cse3LITelrkTpS81vYlF4/xHfUOUDEhotDErotqjNA8/dCxlX+bxXaKlRSgKFAwtZMJ2bb3v+WV8Oj1dqyAnwYkFQfSlvv9JAMJ2dz+DCgLC/tnA2efEVbGNRJxKAPXGIhThsFTI638LTmxzIZpRpFwYm4aGKVTmMZoR4eBFkGtBQrozPSt2KGY2l1Wn7hbKIDTkPriVhW6muOQt/T0FleOlZvtSuj71iRt03eHjfZvxPuzBdV7g6CrUlq0PGsxAy86Vbei4L0S0DGSe1+Zkv+WpvDZY7q7nxjOYmcuINzWB80WeYjTH19lRR1BRTtpQuTvyV68KO2PIeut4cTBdBCQ1VhDgVtXmpbZdvJZMeaXfu+y2dtAd9UwYXB8U702XMjmTEqi3B3RHTQG8Ka2MxdN0AJwClQYhYcG0cHJsRWYDcVxbk0rO1VL6wMSd9I/7qdVqQ/C0bTguDM0Jy1vB6p4TulJh3FdHn+hS7Po4lqOvzvJDQrUUWnQ9WYEXFz6RdtDSgwXiRGvWOPxfVeqQnZXB20PRd5b3kUeP4/03ybtySAH/+O8OFHyeM7/NtsoR4sa3NGc96omGDb++v9ooce+UZyvlw+R+Lb64bORHemnhD2lfSW/3GJjQQtjgm8G5LlRdpKvMkbEEemS9ZZ9Lk5zHJTXsMp1zZR6tcLeRqff+jhG5ybD0x68uTAgFfMUOmTtoGV0azkqBVLq5qD/wHrdNsHhRMIToAAAAASUVORK5CYII=");

/***/ }),

/***/ 2562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAANCAYAAADMvbwhAAADq0lEQVQ4jY1VW2wbRRQ9O+v4meA87HSjJMYkaUPkhLRuooqWh+kHH7wqpH5UKlA+KEJCCKkCQb/4qBB8F4lHQAIJkcqqSqgKBIlGrEpRFNSsU7kTYjtunJedOnHix8aJ7V0v2iquguMHR1ppZ+aee8/cPbPDoAgup6MGwDEAgwDsAEwAMgDuAVgvjq8AI4DWHX4WwDKAKQA8L9BEMe0/QlxOx9sMy75n4myxhu5+xsi117JaXU0+l5Uy8dhWct6/nZiljdJ22gbgUwBzu+hq4Y+IRqPU2Q7Mmzt6avQWzqjRG7R5WZK3Y/c244E72eTcDJeXcj8B+JAXaHqPEJfTcVbfYH3n0dPvti5cvxK0Op9oaHIMdJXa8Jp3Iuh3f5GCovwKwAFgBYDZ0v949/6Tbx5iCNnDycTXxMDloX/ajp/gopN/xtZuj1NeoK8U1smOCDNDyPmeM+ce9g5dSNfZD+jru3rt5bpu6TvSyWp1ZgCdAC4ACAE41fHiq/2lRKjQmZtqW44+2+Qb/kxqPni0vsZYN+hyOtTnfjPIM4d73SxLfLoGayIyft3ffPipaOuTz/WxOr2mkgEUWTIAuMoLdBLACICN3GZKLEtgGDQ5Bjp6XjtnuHvt+6T10LEUwzCjhDDTLqejVpU/yO2zLJm49gzDsmTfwNNtlQSoSNydXsrL8hQv0EvqmBeoT/VM+OZooBr3Idt+TmtuZOpsnbUmkyFCCKt6y0IURTmxHI76NQYT88jzp51Grr25YifyefjdX4pQlE+Kloaiwk1LNhlPl6E+6EzvG+f7WK1BK4rpLUmS3uIFGiK8QL0ALmXFhFJtNypCv/zgyYmJP3iB3tg9zws0rsjSB3e+/jgIpXqq3Jao/hJu8AIdRcGsAPzplUW1RRURo7eCkYkx1Tvvl4rjBereXo96Zn/8xlNNSHJuJqXWLYzJTgJfNhnX5cREpiwx5Fv2uz8HFOUFXqCbFWqcjXr+Si6OjXjLRigKYt6/GwH8VphiCy92zpJdn77VxR053lx8BNduj8/ODF+UFVl+mRdoRUOGIquyvcU6kgz5TmaTG+uN3Qc51Re7Ebz63VRqIeDhBfrtHiGhyOpkW73JEhn/vZ3V6cOE1TDiUnAlcPmr+cjE2Aby+ZeqidiVK2NvsQ5vhkOPrUyMmTR6Y5QhhEktBMK+4YuL8Vk6D+D1UGQ1V+CUumv6AJwB0KHaAsDPAK7xAs3/HxEl8ql31qmdfGsArvACffBJ7gPAv51+iGMTQviDAAAAAElFTkSuQmCC");

/***/ }),

/***/ 8673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAGbUlEQVRIiZ1Wa3ATVRT+9t1kkzRpm7ShLaXShxUr0grIy4pQeYyg6DCKoIAoDgooyKCMrxFnnHEUHBXEAUVEx/H9hlIBqWMdqVjBUh7io1aBNgltkjbJZje7d53d0tLQUtTv1+49u+e759zvnHMp/HtkAii3iVyBwDOiqhI13Kk0AWgE8AsA/WKeLkqWIjDjXanCZpdTyJo4NpsvHuoS7SIHJUHQfLJTqf2hJXr896Ay+4ahozdua2z+32SilavM8Yoffbh5qv3y4jSAJEBifuhqDBTDg7K4QbFWxGUN3+w/5b97Vc17J1siy/8XWe4gW/2ut2eUZXtFiIk/QNobAV1L+oa25yFqHQ7RKiBn5PawLxDLAhDvzx89EBkhusXlFLBp2yHMXbEfHVE12a4DG7afwK33VoFlaVhSGDKQP3YAm5toKt5496i+ZtkoasNWDmOXHMJVJQzyMoG2MFB7WEPFmBy8t7kCB372o9UfSwFQBKChP4f9prFwsGW1RrS1q27lhU2fE2xeNw1Xl2VC03T81BhAiy8Gh51DeakHdhuHQJuEyjlfYNnCUrz4ekO4LRjfedoXXQRA6u2XOZ+otEj80Osiy3Y8J7LjR3kxZfoYzF1WYzodVpyGg41nMPP6IQh3KkioBE1/deKWxbvw5MqRmDurCPfOG5YS6pBLjv8WmhOT1NcBJC6UxrxIVLlJiRPq8N92VI64FoUUjX0f3IiVT32HZzceNJXXFoxjx95mM0qvx4qt665D+RVu00FrIGbY2Pxce76iaPPDncqmbudJArk03/LAg7MFpmq9G8vXhxHq7NqUO92Ct16ajI9fmwqKAoJh2RAPli4oxXef3txDZGDhir1Yu2oUnn98HGO38ff39p8UmUb0+bdUcPAWDcfShTHU13yFidddCdqWa9o9GRZkZ4lYuXg4aBpwOoSktBhRe+wSJoz2onDKl4iqKcVAxAPAf35k+RkOODzpVtCOfNy/oBQjShxQW+sAfUBF90CVJWx5iEbD0QCUgjKo42ayjozUO/ukMdsjzLr5GpalnQUARcMXiGHykibdLOLzCvlCeGJdvfruHgklgzUwvzcgMagIXGrqXX3IMlzswknlbE/Kqr/5G7JCkqqYpiizeC+EmAyp+oCupfEhvPl0GQprX4XaFsjtVn33n3R7SCm8rNAJineYC59VN4V1XU/q5A47j8+2Thswuur9cV2L+jBjUi5O7JyOa0dnGRsu7012+RUFHMuImeaLQVF7oKXfkSFaua60Z9mQ47X1scsJXTl0JABoivk+pSLX6cmwTO8hc7u4CeNLKYa2pJsfHGwMGKPlSG8nhtR7Y/YNQzF5Qo7ZVXpD11G1+0cVRDIFiLFXZRkbnIhu6ecNEm66soAGJXSR7ar5S20Pye+IHnpkt58VT+zDjr1NEHgahAAsS0FVCViWw+F9d/TQSTL5oqqOzHw45uNoWw4uK0pDNJYo6SGTZK1k2FArKN5u/vDRzj86I9HEDkB4wUyNoqG6phn1W0RYhOR2OnNNHD8dDqCstKewm08FNCkSbOWcHoBjafAcwwPgzTRGY5rT6+2KKhJN4GRLxJhH5tT1tRPMW/oV5lUyfYgMPHYni/nLq8ye2Q2ng6vdt7/dHLIGii5JNWrnknNqlHjzYc+3J43z+rr7xwXPRDCmIIjVtwt9iAyMKmHx8nIGU2//pGft0PHoxqo6opPQr2aqZUUzVGVju6JRE5Pu+SWFYf9UWwKy5G+LP31OGMY9pEuhVD8DydCNIR6WSTLu2V2v+kbPqfeEIj9SkahqzDnNiCzNaadI/RaReuUBcCms0nD2tgRJ1rVn77Piz45c/BYpxLTVMhY/n8CqVxQsWa9gxhoZIxbFsGV3Kra9OAXHfg0afc3Ip+I/o6y9cRyNo9tt1LzrzayVGNuhst30xxrBRIEDJcl43B8kL8FsYfwzuk4eWTSnFJUVQ6gsjxVn2iVTMFYLB6eDhxRX8W1dC958/4h6ujVy4nRAGXY2umK3k66zWSgSk3Wfr51M6h27kVIXgECvtUEOK3WsOI+xD/ZaqNZ2HW1hDTzPIJEgsKZQyMtkEOqQceCYovAsbmvr0M8dHpBqRNk9sf/NJTXdm06v1Qhm2a2UkOmidLeLpsMRnfiDhAqEdPAcvj8VII8C+HkgR//lRmzA6E+DjZo5ewM+dfaMLg4A/wCrb5puQ9VWGgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 4204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAaCAYAAAC6nQw6AAAC50lEQVQ4jaWUXUgUURTHz53vXT923fW7wgpT08B8UKSHqCTzIdSskKIegoLeC4TeoyB6lCDppZIeEop6qAgxqIyEFDTT1dS1xlXbXcfVdmZndmZu3LXZQpxd2g5cmHPv//zuOWfuvQg2jCnweoYBIS9D0/rAk97uZ6/6t9/q7jkJNubkOSdCaM0vBvYAgGap3PuqKoIr08PYGsdPdeCapiY8/u4lnvrYjxubj+IDba3JdWnkNW6orVFJLAFYGVVkC8xYaZ5Dt8gBOpeXq/fT2z4NqBQCHNxbz2r+OWq3LilknUcGL65qSJL1/QAwxpDJUhd39WbbDvZ8Qz5ngby3A6BkOeH+uTLe7WDg0LAAOsuAr6vamRAo6/B4aBFuvJevjwTUVgoAWMPEHafrPMiuH1uakAXtVQKsKkYzADgIqLZxVzYtsNQ/cQBRwAoCHCzjWQCoI9HZxbksvVnHq1FgBt9ASS4HniwGzJEh4JX1TTAELiFRCMfYbTjfVQ66icHxO9Pla+VAU/bV24JYGiXGTCgGugFQWSSkrDRtY+4NBtU7b5fldDrbjCz7sqTIStzE5DD/F+hrMIZVHaeTpQdJsoFNjM10upQ9isVNwICjNIUiEcXIHORfUYGjqe8cjebnwmrmoNlQItinm3giHShlj0hw6Gd8VDNw1B9WzVQbp8zItxyLRjXTFzfwo7P13oVU2pSg8UU5BgAzABAVJS1z0GxYJZfLT77b705VZgTCGEDRTPJixokfN7Cim/YH0xYkrmogsNSS5fMMEudX7P+cLYjcegrBZFJIocnpH6RlWxvpQVlhDje6M9/5B0ohKrSmUVJUvSTJ+kMy5WCpE/k53IMSl5CsjwWdJ1mKkXhN4qUqLS6aeN7bU+VxuxICpMlwpPOiNvttgf97/+LCgvCHF32e5IQcgcNnLkf8YsCdOJAIQU9L54Ur1rrAsUKeK+fz5iJYlnnacKyjZcPD4OR5pzfP1ecXA/AL1N4sGcrGgooAAAAASUVORK5CYII=");

/***/ }),

/***/ 6103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAJlElEQVRogc1aa2wcVxX+9v20xzt+rO14nNidbpxHHdI4ztMuNE0fdGhCWqgQIPiBAAkBfypA/QFqqXgJJASVAPGWUNVCJVRYClIJSUjaNKTFTuI0yWYSOx174+fa3l3b6/XODjrXs+vd9awfiRP2/Fjfmbn3zv3uOfec75yxCSUkkijwAH4C4CkAtLYggK8EZWVguVWWDBBJFGgtJwHss9utMJvNSCSS9KgXwK6grIwsNd5811a6vOwgEL4KL44c2o8jh/ZhfWMNDWoC8JokCo6lZiglILX0U13FwWq1MI3s3b0FlZXldHuPbnJFpZSAdNPP4PB49obFYsYHO7fB5WLK+LwkCk8XG1wyQIKy0g/gTDQ6jYmJePa+y2nH3t2bM5c/k0TBbzS+lDRC8if6eb8//1zX1fJoCQjU9AH4gdHAUgPyN/q5ORhZ9GBbazOcTjs1Py2JwvbC5yUFJCgrlwFEIpEoNE2D16Ohkk+zZzabFa1byYGxkPH1wrGlphGSc6qaRjw+g107ZvFgRyL74J7mejgcNmo+JYlCVe6gUgRyjX6mpmfR3WPH6bML4YO8WNMG5qUtFENzB5UiEHZA5uZSGIuY0R+25D1sWFedaT6ae7+UKMpOAF8F8BAAfwXngcNhX9QvrWkYGZmg5qQeJF8MyspwSQCRROGjAF69RQsZJWrzfwciiQLZDgXD2vadLVgv1MBkWryslKoindYWrlMphEL9CMmMGL9uvbvLNhTiUbXr6isRENcV7WTH4qXubNuIG8owZmfnDmZVKYmCTRKFiru3/qwcpEZ9XdWyHc1moKFehdU6rxnSnK49k1VX7fcAfImojSQKpKsvB2Xlz2u9YkkUmgF8BsBm3bYpcXqcntXV8Xl962tVFhD7FAuSyXlTq/Or2LdrFl3n7Qhds2JqOpHJWbpJX88BeMZms6C8zIOxSJT0+6okCg8EZeXUGgFoAfANAJ/SY0BGvkh/y8s9KC9zZ2+uF1LY3ZbU22a8cdzJ2oPDFrzTZYeiu+TR0cnMmHcIyBco0Dz+2G54PU5c772Jt95+j0zu95IobAvKShy3KJIo0M5/E8DHSf3ElYj81ddXYmoqga5uGdHYNIsB6XSa5SAkvop09oUV3EJbVYFrfQtnZWh4ItM8QXer3G4HA0HS3FSH/oFRvK8Mkxn8MLNrq9QAkbpvATgEnYpv2bwB94rrWHQm4X1lqK7m8M+jXZiYjOPfpy6gc/99DEzvDSvWCyqcDg2Xr9qKvmdggKwTdGCOWgI898lkMlXZsrEx+xK/34frvYNIpdS2AM/dCEWi3SsEUB7gud9SkALQ4nY7sf0DIvbt2Yzq6gqYzflulTLBxsYahMMRDI9MYHwijkahBsmkGSHZhitXrbg5ZDF81/h4DBcv3aDmm0FZeZFWfpauRsey9ganw46OfVszHuGXkig8vAIQ1PllAJ/wuJ3Ys2sTDn9kD3OpZnPxOEfveujAdlRwXmYJpBkyM00D5lLFwxy5XV3+SH9II5ThS16PC7V+X7YjXdOC+gdGaBUfC/DcuQDPXQ/w3LMBnvt1gOeeD/DcIwGeSwZ4LgSgE8ALXLkHH360HVVVnGFgM5JCzUQm4hAaqotuAFH802cuMT5GKXAoEo1Szzfoqn9gcbXlnuY6tLdtZBtHlQwAXQC+bTKZRJvNSjHnQwBeInMF8B3quKlFYLnDaiVXM2T7x06cY9HcSCjxmp5m9P6oniLDEopExwM893QikaxuaqqDw55/uKiKwXEepnZN0/xlXhfbcbL9Wj+PlJpGLDbt1jQ0UP8N62tRUeFdNRAUaGZsLIqR0UlWEirUzNl3Q4jFZ6j5TCgSpWQsS9JeoZ9r18OGL6BDq2maiZxBZ0crPLqHq6mpYGfpycMdmTwBU1MztwQiI7maGRoaX6QZ8nDhm2PQ+dlfMvczQH5DrlyWw6DsLFdmZ+dw8tQFZpftbS3wGew2ZW3ktkli8cSi52sJ5kJPX6bbj4KykkXIfBsdlgDPbU6p6la73caKZNAP1YmT55lbpPPSel8zrFag/f4ktrTMMeoQjel7oQFXQkoeqNsRIzOj6P9u11WadYiKEKFINFWoEehURe252IuZmVkdfS87WKQF0gaJ2DTHKARFXMqpM+ZL5kZeKh6/PdMy0ozPV5bVjC4vBGUl70VZIEFZuQTgp8lkiigKwuExnO/pZR6oc39rNliq6oJLVdMm5u/ZRGYT3C4HI3KapmGthMA8fOB+xgSSyTmaldzrzwunL3TUzwK4SFo4ceo8u0FVvrIyV7YDcR2iDeFBC958247cNXu9Lpb8TOsaXSthm9mR3UwqBrsKp84DoqvrMTrjdOg3tTSywJQr6TRwrseGk6cdGB7Npw9e77w3W0vzys7tcTL6Qr4FwO4lgehCJ9XB82XYvk1c5cvmNypexHPxvjS2bppDFZ82fL6c5HjMRamkERC2+nX1VYtI3nLi8epADGKJ26XhQGeCebsHOxMsaVqtzMwnUSTTKwHCCmQD4VGo6eI7JzbPJz+5dCqTCkwZmJbbrWU9HI3xelenFXIg/fO0neStlQD5D4BTkUgMwdfPQL4WZmy0UCp9afhr1HwgWY0sNi0qtg3cnD9TlOkNjxjT82JCSVgsxhRxLMOvcsXQdiRRoBP+KwBP0DV9aGkJNKC5uZ4lSdldMM8f/lx56ZVjcDpsOHJ4v+GSjMYsJbT4/3bLUOY/NcQAtAVlJVQ4xHBbQpHodCgSfTnAc3+lM5ZKqZsGh8ZNl68oLMpS4CP+ZUSze/sGmUa2bNkAs8kEFyxwwAIrTLDABJNmWlF5c3JyipHDM2cvgz7+ACBuIgVl5YJR/xWdZr368TkAn9W9GgNDpLHOz7OUtaqSY37+X8e7Gal7QtrDKAUtu9xkhdNgz6aQQlxL5d2LjMcYo1AWPvYM6VWeXxRG81UDyQFk0WuzT+plnPrsRCYTiOJTbZbiyAMdrXkxiDRihwXkCKnPLNJQseC5qCLS815f7oHu13Oc3y0F4JaAFICisdv0zHAvFf70T8lszsC9DZmkbEmhjLDnYl+GmpNcB/B9HUBy2QluF0gRcFScagfwD7PZ5HjkYBsq+XLDvkQCicsNLXzFpQP8XQB/CMpKynDQEnJHitiSKNDngR/TfzDs2B5A0wY/cwwUC4iMXrjYi9GxaKY7kdXnqYgQlJVbC/l38vuIJArP6cU5lluQl0skZkHsWpduPXV4LSgrt02X7+hnBUkUyMy+BqCDMmMqRwE4rseov68FACYA/gfGa4gp9TuoQQAAAABJRU5ErkJggg==");

/***/ }),

/***/ 1765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAazSURBVHic7Z3fixZVGMc/z7rurruKtpqu/bBldTOztFpD0bIirLBEsJ9iXfUDCgRL6O/ourvotroIquuCoqAkoiKhwPAiklArRVHX08XMtu++O+/MOTNnZpZ9ng8MuPvOOec7M5/3mZ87inMOQy99bQcw2sUEUI4JoJxSAojI0thByrAQcohIv4jIAshRal0ECyAidwLHywwWExF5BHix7RzAc8ATbYcAjovI1tBGEnoWICLvAk8C4865q6EDxkJEPk4zbGsrQ5rjW+Csc+6xFjMsBU4BnznnXglq7JzznoA1wCXAAUdC2sacgEngeprj0RZz7E0zOOCuFnMcSTNcBtaGtA3dBbwODKX/fjOwbUyOATP73bdazNE5dpvrY2bsQeCNoJYBlg0AfzBrvAP2tmD7DcCFjgzXgc0t5JgEpjtyBH/7IuXY27VNzgBDdVSAw8BY1+/asP41YKTjZyGpCE1zjLkH0YMkFbJpurfBjcBL3q0DTPueuaY5km/AxgZt7wdOZ+S4CIw2mGM0HbM7x5/AYIM5NjK3Cs1MP5Me4EepACLyMLA946M+4Ki3bdV5Brgl4/fDJJWhKV5Nx+xmLUmlbIqjZJ/KbwG8zkp8dwF5JeWwiCzx7KcqeTn8y1518sZq5NpEus7zZPNbHx5lZgA4y/wy0znta6jsXinIcXcDObYWZLhGAweDwL6CHP/gcTDoUwEeJznyzuMFj36q8jRQdLmziRzPF3y+hGRXVTdFy7oC2F/UiY8APiv1kIgMeMxXBZ8cRRsnBj5j1JojXdeHouQoKDPLgH/JLzUz04Eay90Y2Ue7WdP9Nea4xzPDNHBTjTkOeOa4CIxU2QU8BSwvtCihzvL7LP4HrHXm8P1m95FkrgvfZRwm2Ya9KTDtQ/xMcySVYllNxn8ZkOM0nufAJXL8FpDjq5oyhFRlB3yU21/OQIPM3vjxnQ7WsMBjzN748Z121pBje2CG68BYDTkOBua4RM7ZQF5Z3cHsjR9fHgic34c9zN74aTPHg4HzS005QvscItmWmeQJsDtwoLJt6uizjhx7GmpTRJll65kjtgBTIjJYol0eJkBKum6nYuaILUDZgJmIyBBwX4mmYyIyETHHBuDWEk3vFZGsewZlmSJZx6Hs7vXcYqYAIrKJ5MZGGWJ++3aQXIpuO0fZb3I/sDNijrLLtBq4I+uDXhWgysqLueIXSo4qpTzmbqDKMmXmMAH8WLQC9DrX/IGwc83uaSLSOe+ZChmmgeURMizH/zJ01nSeCBemgImK2+Sk13WA9GBhsodFvtxesT0isork8aay9AGbquYgeeqmyl9QrQTWRchRdZ1uzHpuI2vB1hJ+Aaib8YrtY/Vx2wLpYzxCH1VzLAFu7v5llgDjFQcCW/F19DEeoY95ObIEWCgLbH000EddFWAx9bEhQh/jC6SPectiFUB5H3VVgPURHhGLkSNGH63vv9N1uT5CjsaOAYTqpTNGjlER8X2iaR7pzZeyl8Q7qbosGwi/Jd6rnznUJQBUsD7daKvbzkG8FT8iImsqtB+PkAGKKoCIrMb/GcDgwRpqG7OvxZZjuFvE/q4Zpon3B44nKrQ9FzHHrxXanoqY40yFtici5rjW+UPwG0KMxYW9JUw5JoByTADlmADKMQGUYwIo5//rACLyOXGfYJ1hnXPub9+ZReQkcS/AAFx2zq0KaSAi56n+YEw3vzvnNgdkWEny3qHYfOOcewjmXggapNwz50WEXkqtK0coQ8TPEdqf1JBhTg7bBSjHBFCOCaAcE0A5JoByOs8CPgF+qWGMK4Hzf0DyWvqYlPl/Dd6n+LV0ofwVOP8V4L3IGSB51Q1gt4PVY7sA5ZgAyjEBlGMCKMcEUI4JoBwBvm5orLedc19khhAZBT5tKMfLzrmfeuSYJDn/b4L9zrmzPXLsAt5pIkTst1jlMZrz2UCDOVbkfDbSYI68v51c1VQO2wUoxwRQjgmgHBNAOSaAckwA5ZgAyjEBlGMCKMcEUI4JoBwTQDkmgHJMAOWYAMoxAZRjAijHBFCOCaAcE0A5JoByTADlmADKMQGUYwIoxwRQjgmgHBNAOSaAckwA5ZgAyjEBlGMCKMcEUI4JoBwTQDkmgHJMAOWYAMoxAZRjAijHBFCOCaAcE0A5JoByTADlmADKMQGUYwIoxwRQjgmgHBNAOSaAckwA5ZgAyjEBlGMCKMcEUI4JoBwBdjU01knn3LnMECJLgamGcvzonLvQI8cwsK2hHN855672yLES2NJECHHONTGOsUCxXYByTADlmADK+Q/YFr4df/TcpgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 3085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAtCAYAAAAOYyOGAAANuUlEQVRogbVae4wd1Xn/feecedzX3jW73rW9thcvtsGOoTiAoYjyMC1J0woEEiFNZaU0pKlUNX+kVdvwR4Laqm9VSqqoRRVKFYmmbShxUOKmFS1KaBUBChEU1SQumAIBP9d7H/M+53zVmZlrr83aXtvLt/p0586dOXO+1+97zNK+z12Pa9drPP3jAC8cFPjs7hR/+J0Qn74lQ64FekOBf/mRD8MMQSiJARwZAJnBeclda2F9Y+xtnvL+S0oZW2vPfyMAwaeOtQUmQuBXN4fwPQFixmOvJvjCzjH8yctD3DId4GenfLy4UEAsa/UzH0bARMsdEYjOziwIuWAkMB/LdP6ZYRx9IkqTUkGVuGdnupiNjfZneRlXLUG8jPvcxnLWt6lhcf8jH34IV+3Y/pHDvflfNmyrBcrPpZmW84AlyMkjmgHfbi0mck1+kl+Kfk4XRoCg2c4x8UO3y/UID87j/lVXY2Liso/m1twqLskWp1OiGYXhwDImGh7dqu64KZk7+nrwW1esy1+0UM8YTb1+TAe0wZDO81zGe7XpHMeCXRx1hlR85k47Mz6T+3hu/4uYtS3s2bBTfKX3wz2Z0QdDkm/ZJVc5N1EZY4xBZjvW8tYb1wRjm1Z5uz2Ba2+7vP0PZL91VaOY93/PH9MfxLhB7x0fz72pXtnexms/+ok8kBXiu2cChRM208DbQ3vy3IgsBCKYRizN528uJnfsWujiiI0wNj4GilJMUxsvTWZ4qjhwIGT5sA+R+iwhz7AcnfF9MVAY0J1bx+Xc/pi2/PSEv6097gNDjSLiH3gN748VGU4oMF899k6wZZWXdrqrNe5aU+xAKne01krz7LNhyzL2XYgmc7KfujJv7bix10YfKaSSMGmOlufheBFh5/EmDrUmt3xXHvnCOPyHFYNlKcZiQd5rPxcv2vLd121tPTQuJa0XEigM7NCgd4wH7Zb3VVhkwulESH7N882z/UM+kBFwQpWfq1pGbt5s7hbgrrOMs4qz0ujzlFZHcQQkwn7oMng/d9fCBHIYGMlQJSKZCpWUQA8Zfn44he16bEdG9tcE3htg7lJTsztOTImKk5dPN+4eVz4hA9DXQCownLdQkv5DEb3udCHABKkY3aniMZvRO9mCAiRQyttT2L5ez9z3U/rBDR2IKCckBSHOqXQ/J5gDqcJdDmAo7BZi/sQ9J1ZDCkIiDTwm9xAoiBI8lNO2MMhJ42PxDMaNuismc/ti4HDb73iEVX7FXY9wVUepB7e2f+WKiWAasXGwCpBCHjup8WanJf+OyJYaEItWyr3A/k1v3oMtZLVjt9tU4I5txZ271pkPnUgIg6xiJ5hwuYgJuROIeGMi8LmP9Cc7q7VCJHQtEEBOe9ZCkS2t5rNALDRaENgTr/c17CdjMhtGgjlFTfiE6YCwOqgEu31N8Au7N7VuQ+S0KACrYAtGNNDwpHgUDD0SRZgoQMnDAK1A/jBQ/K3hUVH5GEuUO1aE6zfaj48HGPdl7e2nO0y3IPvw7sH46m15AwvKCVQZXJbJmiAElRWCqG91Ap+gHLNFiPvTtd0TIv/Tw5SuHgoNQwaF5dL1HLUEpu5YHz4AK2qBqg3EfUYo1ROhki9zQRixgCWM2Bmn2eRvx5E3nw5rI7pFEsbUtBn/g1vz35nr6OB4YpDUpQ4x1FCaX/9g1p65JR7DvKzKlJFAzjIeCF6pGwFVH4/OHVU5bsi6+HCyuhMJ84gFjzmhD6e6BI4xKYJPb+n89mSn2UEKwJVmVqBIGHmiD/u++Dc6oy4SrAVOci5ARrzdDvnR4TGVjTQCTaVwa9fyto6Pm+Oiutltuu+Ze2aL4JZ7+xMYSFOWR27DahHL0mpUCqhQHYtaMAnGcZnjnmwSN2bdjX0yD8rqMkTaYl1L3TI92d7iUK7ch60sFQ+KtCG9v0VB79qMwPkpFijchit2pnMWazX5+wS8Mpj3AEmAUUDiXAjqvg/YT/7SZrFBCIt3SN/cst7H9/SmYIVzaobPOLl5VSOii6XSalwJ5tfsjoPSHhZDKvCpZC0u1+Huo1Tc6eLrzsng8gc2jT3YcIjgUNmIckUXR8LKl0IlnneRxPnpLGDcxYtYE0xOPNbiLyURhnpIVaQ7F40E5tage/NGvm9g+Fqw+N09/Ql/zAoMyCBY5HaL3c/hnqqtImtBRyxri6XkEjnjN+MZ4bH4jXel3rV9Irx3rOF3kdhqbw7iE4bOeNAO1ZdJEEvl0PsM/vwvziyZQIVAwlYWUZ+uazQJDi1LwXKJdV2e++8jtGvT/04Gt8oQh0QBv3appdgVpz4RQqFKeF8sNC0SLiKD9fDhL/i0dsbe9tG58U0ldNdx5JC2P8gRSPkVzxMvL7lxp0jJZ+k+GGiG/J0iETvjBVzfatdByhXsPbKT2v/5aoC3U4uwhRqRlibnYE5ojxhmdB1VAvGo9mPAk8D/RQVuChu44UpVK7FeWxCyuICw9Jzvq3/FOXo5QTj7n1LIO23e2xtAFw4cnAJcsKYC7XHG5lvnUaQCQktIohIA5Bkg4WyjiKvfbP3dsUv6VH333HchIAoJKoAN12WgpizjuCwnmKBzQprYrB34/ywF6VK5Z2GxGN/fw3m5kZcaivYOTsiqc3MacgEbScxuTrDuqhi6pyrIXpK5Fs7Wv9tTxxZlhTG6z8aE6SsKTK2r1od2rldFYTzM2BfySWKxv4wve3ZWHJ27+XVyrGria0cX+KZ4QOuboauJyloHHvvYtquHF94NQImEapol3dDhzCgv2dq3bd1zce0AnBFkO8em7Qypg6oGrVN15soiI15vhsE/sTl/qyJOVqPnYAZyX+KLvUGJjNXDTBnZmGgRZm84gSIDfCvKDHAmApbnCPCJTyZjv/yt+h5YQp4y1l9doN1wbUTtdpZgC2AYG3hEf8VgfR55SlJFtrwONPTwqjX2G/2+vHdVewQYAhhIbJnNsTA3gD7YRdi1pbyjVbk+VlS5mjtBo1BwricJaQ9obEwxsy4ABqoSCBXaRnHuUsWTHuE1ky9LJtd1CCyXW57clxZ4N3UVvMvsdW+gMh9br42gGwkolfBoVB4t+uRRTqqPLeAJQMaEYZhhbruAyLwqjtzetUCeW+iCfhKq4NsVvMjlsWKJ5bIvxaFuQF9bGLDhEjCocsNMYqLpYd3OIeLMIHTIhkVCnGSG5FGeYoQscDTOsOYDBh2/AcRUN1AAG4kk0rqp/MeV8I4I8rFsPs+k6nS2gC/oWda0fyF2fiUqJHTaHUpcPsMIZiMkPYGGOh3a/RLSXcwJCCa0lEJ/nqE2Fphd1yzjs0xiJbJ5iJMcDPGKIvH95W+wYoX4wkZ/CtBrGviLd4f81x1Cw8VECWXMCKyHue05/udQgvawgaBpy9nC4qqhTLIeIR8wjgURrr0mBCUKKJx5VBmBOtfIc9MfD1t/Rha6TMAXQMtCvzOZBI43lPj7I7FF2YG4+NKu9xJY7SlMX5NiPingOdinUzWgS8IO9byC8MYwwcadAh0KqrbZVIhqNSFKNALyHydgcGHi1Irn9OLmbx3C3sLQtmEkbh7zazR0qBULzE0ZDGcT9N6UmLhMIGNTth9Og54gvH4sgT9nsHFNF+jJKo5qe6Zp5sqc74VS7GO9vPH0mSTOMSQ9JzuI7irau5BwWuSiwmcHGlrCT33MbtaIWinyyCKU1ZyoKQXm+wUWmjm2b2+DhqouVqsuwUF2lpuoAf+bYqSki2BhDeFi2GgCMe1vCOw9kVmuIL7eSEa4jHxMbdU4nhVlAm1JiayweCOOsPnqEE3rV5WJOdXNxqnhEP5exerHDtLJyIti4SqEi2GdVdpd5dHerOBDket5eFSPcZl/1o0JqA0F+n0NN9t47cgQE1s9rJ1sV/Ct61mY6wEzDTb2UIO8p5aa+V0IKd/KS1rAFUtTkv/8UMp/2QgcXPPJxNxIBdas1zjWK3DwbYKeBK7a3HazNJQI42KJfLBlxFnGHdn8I1iKR+3NxZIb9OBSOVB0IBD09DH3wqpEwrpKLYBpqxDOMPq+xoYrmwiNf3J8UEG4xDCK4bO3T5F4o5TjwtLSe1g5GF4J6oIeP270FTHbTU2XlcoRK7lBDqbdlPYagckwLKsPaFNZKQyQR4kz2oGm9L5+rkbzgtxvpYRqCDq2itSTRzL72Y1KkKibO4eKHQ20GwHIelWidpWDCsCZQZRmuqPCf5Qsjp8c9F0iiUu09ClmdgPK7wnmF47poqofysIUpVXIuZs7535yCVf4GA4jCJLPS8bz1Uu4ldmMyrIVsnlFdkqILx3O+dGMTCsY9V2GqprCqiqfeT70IIbWtt9V4ZfZuLMrYyXUJdmKEgE9H+KxwwWDTT181ALITf3KxM0QDaI4hRDqMTcPXek9KM4uGdJPI6fvLuPf55l/5kRhd15Gsnpj5oWVpaxFEs27Tu4HofWeuchK6JykhF5xY5XY12V+4rA1V7Yhm+5NIaIMGJMwwxix5qgt/CcUiN8HmaCCYuWFQjWHeLlgPHWIzQMbtSWMu54JiJLINmXw9cD6r6AebK40vT8SlcQYZ/nNlPn4CRdpEZAM+zAsjoWs9l1qKXQuUsjU+7a4AIazLH//LSRfbGcpZfDNmGk+QpaS9+2h1XMvoku8AA5IHGwZ+dSbyNC08hsS4q2VykdnzVN5Vr9seh+pafhpn7xdWohn2C7jH5ouhQD8P/GDbf/v4pEdAAAAAElFTkSuQmCC");

/***/ }),

/***/ 4105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./булка.png": 6103,
	"./патроны для пистолета.png": 1765
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4105;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(6366);
/******/ })()
;