/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupPlaybackControls: () => (/* binding */ GroupPlaybackControls)
/* harmony export */ });
/* harmony import */ var _render_dom_scroll_supports_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/dom/scroll/supports.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs");


class GroupPlaybackControls {
    constructor(animations) {
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = () => this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */
    getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for (let i = 0; i < this.animations.length; i++) {
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation) => {
            if ((0,_render_dom_scroll_supports_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsScrollTimeline)() && animation.attachTimeline) {
                return animation.attachTimeline(timeline);
            }
            else {
                return fallback(animation);
            }
        });
        return () => {
            subscriptions.forEach((cancel, i) => {
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for (let i = 0; i < this.animations.length; i++) {
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls) => controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animate/single-value.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animate/single-value.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSingleValue: () => (/* binding */ animateSingleValue)
/* harmony export */ });
/* harmony import */ var _interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/motion-value.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");




function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value : (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)(value);
    motionValue$1.start((0,_interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcceleratedAnimation: () => (/* binding */ AcceleratedAnimation)
/* harmony export */ });
/* harmony import */ var _easing_anticipate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../easing/anticipate.mjs */ "./node_modules/framer-motion/dist/es/easing/anticipate.mjs");
/* harmony import */ var _easing_back_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../easing/back.mjs */ "./node_modules/framer-motion/dist/es/easing/back.mjs");
/* harmony import */ var _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../easing/circ.mjs */ "./node_modules/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _render_dom_DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/dom/DOMKeyframesResolver.mjs */ "./node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/utils/is-generator.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseAnimation.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs");
/* harmony import */ var _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainThreadAnimation.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs");
/* harmony import */ var _utils_accelerated_values_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/accelerated-values.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs");
/* harmony import */ var _waapi_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./waapi/index.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs");
/* harmony import */ var _waapi_easing_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waapi/easing.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs");
/* harmony import */ var _waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./waapi/utils/attach-timeline.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _waapi_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./waapi/utils/supports-linear-easing.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs");
/* harmony import */ var _waapi_utils_supports_waapi_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./waapi/utils/supports-waapi.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs");

















/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxDuration = 20000;
/**
 * Check if an animation can run natively via WAAPI or requires pregenerated keyframes.
 * WAAPI doesn't support spring or function easings so we run these as JS animation before
 * handing off.
 */
function requiresPregeneratedKeyframes(options) {
    return ((0,_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_0__.isGenerator)(options.type) ||
        options.type === "spring" ||
        !(0,_waapi_easing_mjs__WEBPACK_IMPORTED_MODULE_1__.isWaapiSupportedEasing)(options.ease));
}
function pregenerateKeyframes(keyframes, options) {
    /**
     * Create a main-thread animation to pregenerate keyframes.
     * We sample this at regular intervals to generate keyframes that we then
     * linearly interpolate between.
     */
    const sampleAnimation = new _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__.MainThreadAnimation({
        ...options,
        keyframes,
        repeat: 0,
        delay: 0,
        isGenerator: true,
    });
    let state = { done: false, value: keyframes[0] };
    const pregeneratedKeyframes = [];
    /**
     * Bail after 20 seconds of pre-generated keyframes as it's likely
     * we're heading for an infinite loop.
     */
    let t = 0;
    while (!state.done && t < maxDuration) {
        state = sampleAnimation.sample(t);
        pregeneratedKeyframes.push(state.value);
        t += sampleDelta;
    }
    return {
        times: undefined,
        keyframes: pregeneratedKeyframes,
        duration: t - sampleDelta,
        ease: "linear",
    };
}
const unsupportedEasingFunctions = {
    anticipate: _easing_anticipate_mjs__WEBPACK_IMPORTED_MODULE_3__.anticipate,
    backInOut: _easing_back_mjs__WEBPACK_IMPORTED_MODULE_4__.backInOut,
    circInOut: _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_5__.circInOut,
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
class AcceleratedAnimation extends _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__.BaseAnimation {
    constructor(options) {
        super(options);
        const { name, motionValue, element, keyframes } = this.options;
        this.resolver = new _render_dom_DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_7__.DOMKeyframesResolver(keyframes, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    initPlayback(keyframes, finalKeyframe) {
        var _a;
        let { duration = 300, times, ease, type, motionValue, name, startTime, } = this.options;
        /**
         * If element has since been unmounted, return false to indicate
         * the animation failed to initialised.
         */
        if (!((_a = motionValue.owner) === null || _a === void 0 ? void 0 : _a.current)) {
            return false;
        }
        /**
         * If the user has provided an easing function name that isn't supported
         * by WAAPI (like "anticipate"), we need to provide the corressponding
         * function. This will later get converted to a linear() easing function.
         */
        if (typeof ease === "string" &&
            (0,_waapi_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_8__.supportsLinearEasing)() &&
            isUnsupportedEase(ease)) {
            ease = unsupportedEasingFunctions[ease];
        }
        /**
         * If this animation needs pre-generated keyframes then generate.
         */
        if (requiresPregeneratedKeyframes(this.options)) {
            const { onComplete, onUpdate, motionValue, element, ...options } = this.options;
            const pregeneratedAnimation = pregenerateKeyframes(keyframes, options);
            keyframes = pregeneratedAnimation.keyframes;
            // If this is a very short animation, ensure we have
            // at least two keyframes to animate between as older browsers
            // can't animate between a single keyframe.
            if (keyframes.length === 1) {
                keyframes[1] = keyframes[0];
            }
            duration = pregeneratedAnimation.duration;
            times = pregeneratedAnimation.times;
            ease = pregeneratedAnimation.ease;
            type = "keyframes";
        }
        const animation = (0,_waapi_index_mjs__WEBPACK_IMPORTED_MODULE_9__.startWaapiAnimation)(motionValue.owner.current, name, keyframes, { ...this.options, duration, times, ease });
        // Override the browser calculated startTime with one synchronised to other JS
        // and WAAPI animations starting this event loop.
        animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        if (this.pendingTimeline) {
            (0,_waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__.attachTimeline)(animation, this.pendingTimeline);
            this.pendingTimeline = undefined;
        }
        else {
            /**
             * Prefer the `onfinish` prop as it's more widely supported than
             * the `finished` promise.
             *
             * Here, we synchronously set the provided MotionValue to the end
             * keyframe. If we didn't, when the WAAPI animation is finished it would
             * be removed from the element which would then revert to its old styles.
             */
            animation.onfinish = () => {
                const { onComplete } = this.options;
                motionValue.set((0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete && onComplete();
                this.cancel();
                this.resolveFinishedPromise();
            };
        }
        return {
            animation,
            duration,
            times,
            type,
            ease,
            keyframes: keyframes,
        };
    }
    get duration() {
        const { resolved } = this;
        if (!resolved)
            return 0;
        const { duration } = resolved;
        return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(duration);
    }
    get time() {
        const { resolved } = this;
        if (!resolved)
            return 0;
        const { animation } = resolved;
        return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(animation.currentTime || 0);
    }
    set time(newTime) {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.currentTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(newTime);
    }
    get speed() {
        const { resolved } = this;
        if (!resolved)
            return 1;
        const { animation } = resolved;
        return animation.playbackRate;
    }
    set speed(newSpeed) {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.playbackRate = newSpeed;
    }
    get state() {
        const { resolved } = this;
        if (!resolved)
            return "idle";
        const { animation } = resolved;
        return animation.playState;
    }
    get startTime() {
        const { resolved } = this;
        if (!resolved)
            return null;
        const { animation } = resolved;
        // Coerce to number as TypeScript incorrectly types this
        // as CSSNumberish
        return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(timeline) {
        if (!this._resolved) {
            this.pendingTimeline = timeline;
        }
        else {
            const { resolved } = this;
            if (!resolved)
                return _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_13__.noop;
            const { animation } = resolved;
            (0,_waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__.attachTimeline)(animation, timeline);
        }
        return _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_13__.noop;
    }
    play() {
        if (this.isStopped)
            return;
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        if (animation.playState === "finished") {
            this.updateFinishedPromise();
        }
        animation.play();
    }
    pause() {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.pause();
    }
    stop() {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle")
            return;
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation, keyframes, duration, type, ease, times } = resolved;
        if (animation.playState === "idle" ||
            animation.playState === "finished") {
            return;
        }
        /**
         * WAAPI doesn't natively have any interruption capabilities.
         *
         * Rather than read commited styles back out of the DOM, we can
         * create a renderless JS animation and sample it twice to calculate
         * its current value, "previous" value, and therefore allow
         * Motion to calculate velocity for any subsequent animation.
         */
        if (this.time) {
            const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
            const sampleAnimation = new _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__.MainThreadAnimation({
                ...options,
                keyframes,
                duration,
                type,
                ease,
                times,
                isGenerator: true,
            });
            const sampleTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(this.time);
            motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
        }
        const { onStop } = this.options;
        onStop && onStop();
        this.cancel();
    }
    complete() {
        const { resolved } = this;
        if (!resolved)
            return;
        resolved.animation.finish();
    }
    cancel() {
        const { resolved } = this;
        if (!resolved)
            return;
        resolved.animation.cancel();
    }
    static supports(options) {
        const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
        return ((0,_waapi_utils_supports_waapi_mjs__WEBPACK_IMPORTED_MODULE_14__.supportsWaapi)() &&
            name &&
            _utils_accelerated_values_mjs__WEBPACK_IMPORTED_MODULE_15__.acceleratedValues.has(name) &&
            motionValue &&
            motionValue.owner &&
            motionValue.owner.current instanceof HTMLElement &&
            /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */
            !motionValue.owner.getProps().onUpdate &&
            !repeatDelay &&
            repeatType !== "mirror" &&
            damping !== 0 &&
            type !== "inertia");
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseAnimation: () => (/* binding */ BaseAnimation)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../frameloop/sync-time.mjs */ "./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/KeyframesResolver.mjs */ "./node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _utils_can_animate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/can-animate.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");






/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */
const MAX_RESOLVE_DELAY = 40;
class BaseAnimation {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }) {
        // Track whether the animation has been stopped. Stopped animations won't restart.
        this.isStopped = false;
        this.hasAttemptedResolve = false;
        this.createdAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        this.options = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            ...options,
        };
        this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */
    calcStartTime() {
        if (!this.resolvedAt)
            return this.createdAt;
        return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY
            ? this.resolvedAt
            : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved() {
        if (!this._resolved && !this.hasAttemptedResolve) {
            (0,_render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__.flushKeyframeResolvers)();
        }
        return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(keyframes, finalKeyframe) {
        this.resolvedAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        this.hasAttemptedResolve = true;
        const { name, type, velocity, delay, onComplete, onUpdate, isGenerator, } = this.options;
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */
        if (!isGenerator && !(0,_utils_can_animate_mjs__WEBPACK_IMPORTED_MODULE_2__.canAnimate)(keyframes, name, type, velocity)) {
            // Finish immediately
            if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_3__.instantAnimationState.current || !delay) {
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate((0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_4__.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete === null || onComplete === void 0 ? void 0 : onComplete();
                this.resolveFinishedPromise();
                return;
            }
            // Finish after a delay
            else {
                this.options.duration = 0;
            }
        }
        const resolvedAnimation = this.initPlayback(keyframes, finalKeyframe);
        if (resolvedAnimation === false)
            return;
        this._resolved = {
            keyframes,
            finalKeyframe,
            ...resolvedAnimation,
        };
        this.onPostResolved();
    }
    onPostResolved() { }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
        return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
        this.options.type = "keyframes";
        this.options.ease = "linear";
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((resolve) => {
            this.resolveFinishedPromise = resolve;
        });
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainThreadAnimation: () => (/* binding */ MainThreadAnimation),
/* harmony export */   animateValue: () => (/* binding */ animateValue)
/* harmony export */ });
/* harmony import */ var _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/utils/KeyframesResolver.mjs */ "./node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/spring/index.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/inertia.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs");
/* harmony import */ var _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/keyframes.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs");
/* harmony import */ var _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseAnimation.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _utils_mix_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/mix/index.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/index.mjs");
/* harmony import */ var _generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generators/utils/calc-duration.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _drivers_driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drivers/driver-frameloop.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generators/utils/is-generator.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/is-generator.mjs");















const generators = {
    decay: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    inertia: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    tween: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    keyframes: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    spring: _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__.spring,
};
const percentToProgress = (percent) => percent / 100;
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */
class MainThreadAnimation extends _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_3__.BaseAnimation {
    constructor(options) {
        super(options);
        /**
         * The time at which the animation was paused.
         */
        this.holdTime = null;
        /**
         * The time at which the animation was cancelled.
         */
        this.cancelTime = null;
        /**
         * The current time of the animation.
         */
        this.currentTime = 0;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */
        this.playbackSpeed = 1;
        /**
         * The state of the animation to apply when the animation is resolved. This
         * allows calls to the public API to control the animation before it is resolved,
         * without us having to resolve it first.
         */
        this.pendingPlayState = "running";
        /**
         * The time at which the animation was started.
         */
        this.startTime = null;
        this.state = "idle";
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */
        this.stop = () => {
            this.resolver.cancel();
            this.isStopped = true;
            if (this.state === "idle")
                return;
            this.teardown();
            const { onStop } = this.options;
            onStop && onStop();
        };
        const { name, motionValue, element, keyframes } = this.options;
        const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_4__.KeyframeResolver;
        const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        this.resolver = new KeyframeResolver$1(keyframes, onResolved, name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten();
        // If we've already resolved the animation, re-initialise it
        if (this._resolved) {
            Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
        }
    }
    initPlayback(keyframes$1) {
        const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0, } = this.options;
        const generatorFactory = (0,_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_5__.isGenerator)(type)
            ? type
            : generators[type] || _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes;
        /**
         * If our generator doesn't support mixing numbers, we need to replace keyframes with
         * [0, 100] and then make a function that maps that to the actual keyframes.
         *
         * 100 is chosen instead of 1 as it works nicer with spring animations.
         */
        let mapPercentToKeyframes;
        let mirroredGenerator;
        if (generatorFactory !== _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes &&
            typeof keyframes$1[0] !== "number") {
            if (true) {
                (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
            }
            mapPercentToKeyframes = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__.pipe)(percentToProgress, (0,_utils_mix_index_mjs__WEBPACK_IMPORTED_MODULE_8__.mix)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [0, 100];
        }
        const generator = generatorFactory({ ...this.options, keyframes: keyframes$1 });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */
        if (repeatType === "mirror") {
            mirroredGenerator = generatorFactory({
                ...this.options,
                keyframes: [...keyframes$1].reverse(),
                velocity: -velocity,
            });
        }
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */
        if (generator.calculatedDuration === null) {
            generator.calculatedDuration = (0,_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_9__.calcGeneratorDuration)(generator);
        }
        const { calculatedDuration } = generator;
        const resolvedDuration = calculatedDuration + repeatDelay;
        const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
        return {
            generator,
            mirroredGenerator,
            mapPercentToKeyframes,
            calculatedDuration,
            resolvedDuration,
            totalDuration,
        };
    }
    onPostResolved() {
        const { autoplay = true } = this.options;
        this.play();
        if (this.pendingPlayState === "paused" || !autoplay) {
            this.pause();
        }
        else {
            this.state = this.pendingPlayState;
        }
    }
    tick(timestamp, sample = false) {
        const { resolved } = this;
        // If the animations has failed to resolve, return the final keyframe.
        if (!resolved) {
            const { keyframes } = this.options;
            return { done: true, value: keyframes[keyframes.length - 1] };
        }
        const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes, calculatedDuration, totalDuration, resolvedDuration, } = resolved;
        if (this.startTime === null)
            return generator.next(0);
        const { delay, repeat, repeatType, repeatDelay, onUpdate } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (this.speed > 0) {
            this.startTime = Math.min(this.startTime, timestamp);
        }
        else if (this.speed < 0) {
            this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        }
        // Update currentTime
        if (sample) {
            this.currentTime = timestamp;
        }
        else if (this.holdTime !== null) {
            this.currentTime = this.holdTime;
        }
        else {
            // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
            // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
            // example.
            this.currentTime =
                Math.round(timestamp - this.startTime) * this.speed;
        }
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.speed >= 0 ? 1 : -1);
        const isInDelayPhase = this.speed >= 0
            ? timeWithoutDelay < 0
            : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = totalDuration;
        }
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            elapsed = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__.clamp)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes[0] }
            : frameGenerator.next(elapsed);
        if (mapPercentToKeyframes) {
            state.value = mapPercentToKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done =
                this.speed >= 0
                    ? this.currentTime >= totalDuration
                    : this.currentTime <= 0;
        }
        const isAnimationFinished = this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && done));
        if (isAnimationFinished && finalKeyframe !== undefined) {
            state.value = (0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__.getFinalKeyframe)(keyframes, this.options, finalKeyframe);
        }
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            this.finish();
        }
        return state;
    }
    get duration() {
        const { resolved } = this;
        return resolved ? (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(resolved.calculatedDuration) : 0;
    }
    get time() {
        return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(this.currentTime);
    }
    set time(newTime) {
        newTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(newTime);
        this.currentTime = newTime;
        if (this.holdTime !== null || this.speed === 0) {
            this.holdTime = newTime;
        }
        else if (this.driver) {
            this.startTime = this.driver.now() - newTime / this.speed;
        }
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        const hasChanged = this.playbackSpeed !== newSpeed;
        this.playbackSpeed = newSpeed;
        if (hasChanged) {
            this.time = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(this.currentTime);
        }
    }
    play() {
        if (!this.resolver.isScheduled) {
            this.resolver.resume();
        }
        if (!this._resolved) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped)
            return;
        const { driver = _drivers_driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_13__.frameloopDriver, onPlay, startTime } = this.options;
        if (!this.driver) {
            this.driver = driver((timestamp) => this.tick(timestamp));
        }
        onPlay && onPlay();
        const now = this.driver.now();
        if (this.holdTime !== null) {
            this.startTime = now - this.holdTime;
        }
        else if (!this.startTime) {
            this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        }
        else if (this.state === "finished") {
            this.startTime = now;
        }
        if (this.state === "finished") {
            this.updateFinishedPromise();
        }
        this.cancelTime = this.startTime;
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        this.state = "running";
        this.driver.start();
    }
    pause() {
        var _a;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        this.state = "paused";
        this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
    complete() {
        if (this.state !== "running") {
            this.play();
        }
        this.pendingPlayState = this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.teardown();
        this.state = "finished";
        const { onComplete } = this.options;
        onComplete && onComplete();
    }
    cancel() {
        if (this.cancelTime !== null) {
            this.tick(this.cancelTime);
        }
        this.teardown();
        this.updateFinishedPromise();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        this.startTime = this.cancelTime = null;
        this.resolver.cancel();
    }
    stopDriver() {
        if (!this.driver)
            return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(time) {
        this.startTime = 0;
        return this.tick(time, true);
    }
}
// Legacy interface
function animateValue(options) {
    return new MainThreadAnimation(options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   frameloopDriver: () => (/* binding */ frameloopDriver)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frameloop/sync-time.mjs */ "./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");



const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(passTimestamp, true),
        stop: () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => (_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing ? _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp : _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__.time.now()),
    };
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   acceleratedValues: () => (/* binding */ acceleratedValues)
/* harmony export */ });
/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
]);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canAnimate: () => (/* binding */ canAnimate)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generators/utils/is-generator.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is-animatable.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs");




function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1)
        return true;
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] !== current)
            return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */
    const originKeyframe = keyframes[0];
    if (originKeyframe === null)
        return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */
    if (name === "display" || name === "visibility")
        return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimatable)(originKeyframe, name);
    const isTargetAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimatable)(targetKeyframe, name);
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) {
        return false;
    }
    return (hasKeyframesChanged(keyframes) ||
        ((type === "spring" || (0,_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__.isGenerator)(type)) && velocity));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezierAsString: () => (/* binding */ cubicBezierAsString),
/* harmony export */   isWaapiSupportedEasing: () => (/* binding */ isWaapiSupportedEasing),
/* harmony export */   mapEasingToNativeEasing: () => (/* binding */ mapEasingToNativeEasing),
/* harmony export */   supportedWaapiEasing: () => (/* binding */ supportedWaapiEasing)
/* harmony export */ });
/* harmony import */ var _easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../easing/utils/is-bezier-definition.mjs */ "./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs");
/* harmony import */ var _utils_linear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/linear.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs");
/* harmony import */ var _utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/supports-linear-easing.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs");




function isWaapiSupportedEasing(easing) {
    return Boolean((typeof easing === "function" && (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)()) ||
        !easing ||
        (typeof easing === "string" &&
            (easing in supportedWaapiEasing || (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)())) ||
        (0,_easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isBezierDefinition)(easing) ||
        (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /*@__PURE__*/ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /*@__PURE__*/ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /*@__PURE__*/ cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    }
    else if (typeof easing === "function" && (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)()) {
        return (0,_utils_linear_mjs__WEBPACK_IMPORTED_MODULE_2__.generateLinearEasing)(easing, duration);
    }
    else if ((0,_easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isBezierDefinition)(easing)) {
        return cubicBezierAsString(easing);
    }
    else if (Array.isArray(easing)) {
        return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) ||
            supportedWaapiEasing.easeOut);
    }
    else {
        return supportedWaapiEasing[easing];
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startWaapiAnimation: () => (/* binding */ startWaapiAnimation)
/* harmony export */ });
/* harmony import */ var _easing_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs");


function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeInOut", times, } = {}) {
    const keyframeOptions = { [valueName]: keyframes };
    if (times)
        keyframeOptions.offset = times;
    const easing = (0,_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.mapEasingToNativeEasing)(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachTimeline: () => (/* binding */ attachTimeline)
/* harmony export */ });
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFinalKeyframe: () => (/* binding */ getFinalKeyframe)
/* harmony export */ });
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined
        ? resolvedKeyframes[index]
        : finalKeyframe;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateLinearEasing: () => (/* binding */ generateLinearEasing)
/* harmony export */ });
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");


// Create a linear easing point for every 10 ms
const resolution = 10;
const generateLinearEasing = (easing, duration // as milliseconds
) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
        points += easing((0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoSupports: () => (/* binding */ memoSupports)
/* harmony export */ });
/* harmony import */ var _utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/memo.mjs */ "./node_modules/framer-motion/dist/es/utils/memo.mjs");
/* harmony import */ var _supports_flags_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supports-flags.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs");



function memoSupports(callback, supportsFlag) {
    const memoized = (0,_utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(callback);
    return () => { var _a; return (_a = _supports_flags_mjs__WEBPACK_IMPORTED_MODULE_1__.supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized(); };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsFlags: () => (/* binding */ supportsFlags)
/* harmony export */ });
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */
const supportsFlags = {
    linearEasing: undefined,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsLinearEasing: () => (/* binding */ supportsLinearEasing)
/* harmony export */ });
/* harmony import */ var _memo_supports_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memo-supports.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs");


const supportsLinearEasing = /*@__PURE__*/ (0,_memo_supports_mjs__WEBPACK_IMPORTED_MODULE_0__.memoSupports)(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    }
    catch (e) {
        return false;
    }
    return true;
}, "linearEasing");




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsWaapi: () => (/* binding */ supportsWaapi)
/* harmony export */ });
/* harmony import */ var _utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/memo.mjs */ "./node_modules/framer-motion/dist/es/utils/memo.mjs");


const supportsWaapi = /*@__PURE__*/ (0,_utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inertia: () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var _spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spring/index.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/velocity.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs");



function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = (0,_spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__.spring)({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__.calcGeneratorVelocity)(calcLatest, t, state.value), // TODO: This should be passing * 1000
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEasing: () => (/* binding */ defaultEasing),
/* harmony export */   keyframes: () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/ease.mjs */ "./node_modules/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../easing/utils/is-easing-array.mjs */ "./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs");
/* harmony import */ var _easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../easing/utils/map.mjs */ "./node_modules/framer-motion/dist/es/easing/utils/map.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/interpolate.mjs */ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/offsets/default.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/default.mjs");
/* harmony import */ var _utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/offsets/time.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/time.mjs");







function defaultEasing(values, easing) {
    return values.map(() => easing || _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__.easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = (0,_easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__.isEasingArray)(ease)
        ? ease.map(_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)
        : (0,_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = (0,_utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__.convertOffsetToTimes)(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAngularFreq: () => (/* binding */ calcAngularFreq),
/* harmony export */   findSpring: () => (/* binding */ findSpring),
/* harmony export */   maxDamping: () => (/* binding */ maxDamping),
/* harmony export */   maxDuration: () => (/* binding */ maxDuration),
/* harmony export */   minDamping: () => (/* binding */ minDamping),
/* harmony export */   minDuration: () => (/* binding */ minDuration)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");




const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.warning)(duration <= (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_2__.clamp)(minDamping, maxDamping, dampingRatio);
    duration = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_2__.clamp)(minDuration, maxDuration, (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spring: () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/velocity.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs");
/* harmony import */ var _find_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.mjs */ "./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs");




const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: 0.0,
        stiffness: 100,
        damping: 10,
        mass: 1.0,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_0__.findSpring)(options);
        springOptions = {
            ...springOptions,
            ...derived,
            mass: 1.0,
        };
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring({ keyframes, restDelta, restSpeed, ...options }) {
    const origin = keyframes[0];
    const target = keyframes[keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration, } = getSpringOptions({
        ...options,
        velocity: -(0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(options.velocity || 0),
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
    restDelta || (restDelta = isGranularScale ? 0.005 : 0.5);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_0__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    return {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */
                if (dampingRatio < 1) {
                    currentVelocity =
                        t === 0
                            ? (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(initialVelocity)
                            : (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_2__.calcGeneratorVelocity)(resolveSpring, t, current);
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorDuration: () => (/* binding */ calcGeneratorDuration),
/* harmony export */   maxGeneratorDuration: () => (/* binding */ maxGeneratorDuration)
/* harmony export */ });
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/utils/is-generator.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/utils/is-generator.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isGenerator: () => (/* binding */ isGenerator)
/* harmony export */ });
function isGenerator(type) {
    return typeof type === "function";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorVelocity: () => (/* binding */ calcGeneratorVelocity)
/* harmony export */ });
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/velocity-per-second.mjs */ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs");


const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateMotionValue: () => (/* binding */ animateMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/default-transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs");
/* harmony import */ var _utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-value-transition.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/get-value-transition.mjs");
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/GlobalConfig.mjs */ "./node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _animators_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animators/waapi/utils/get-final-keyframe.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");
/* harmony import */ var _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animators/AcceleratedAnimation.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs");
/* harmony import */ var _animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../animators/MainThreadAnimation.mjs */ "./node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs");
/* harmony import */ var _GroupPlaybackControls_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../GroupPlaybackControls.mjs */ "./node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs");
/* harmony import */ var _utils_is_transition_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-transition-defined.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs");












const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = (0,_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition, name) || {};
    /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */
    const delay = valueTransition.delay || transition.delay || 0;
    /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */
    let { elapsed = 0 } = transition;
    elapsed = elapsed - (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(delay);
    let options = {
        keyframes: Array.isArray(target) ? target : [null, target],
        ease: "easeOut",
        velocity: value.getVelocity(),
        ...valueTransition,
        delay: -elapsed,
        onUpdate: (v) => {
            value.set(v);
            valueTransition.onUpdate && valueTransition.onUpdate(v);
        },
        onComplete: () => {
            onComplete();
            valueTransition.onComplete && valueTransition.onComplete();
        },
        name,
        motionValue: value,
        element: isHandoff ? undefined : element,
    };
    /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */
    if (!(0,_utils_is_transition_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.isTransitionDefined)(valueTransition)) {
        options = {
            ...options,
            ...(0,_utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultTransition)(name, options),
        };
    }
    /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */
    if (options.duration) {
        options.duration = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.duration);
    }
    if (options.repeatDelay) {
        options.repeatDelay = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.repeatDelay);
    }
    if (options.from !== undefined) {
        options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false ||
        (options.duration === 0 && !options.repeatDelay)) {
        options.duration = 0;
        if (options.delay === 0) {
            shouldSkip = true;
        }
    }
    if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_4__.instantAnimationState.current ||
        _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_5__.MotionGlobalConfig.skipAnimations) {
        shouldSkip = true;
        options.duration = 0;
        options.delay = 0;
    }
    /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */
    if (shouldSkip && !isHandoff && value.get() !== undefined) {
        const finalKeyframe = (0,_animators_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_6__.getFinalKeyframe)(options.keyframes, valueTransition);
        if (finalKeyframe !== undefined) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_7__.frame.update(() => {
                options.onUpdate(finalKeyframe);
                options.onComplete();
            });
            // We still want to return some animation controls here rather
            // than returning undefined
            return new _GroupPlaybackControls_mjs__WEBPACK_IMPORTED_MODULE_8__.GroupPlaybackControls([]);
        }
    }
    /**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    if (!isHandoff && _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__.AcceleratedAnimation.supports(options)) {
        return new _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__.AcceleratedAnimation(options);
    }
    else {
        return new _animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_10__.MainThreadAnimation(options);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateTarget: () => (/* binding */ animateTarget)
/* harmony export */ });
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./motion-value.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/utils/setters.mjs */ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-value-transition.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/get-value-transition.mjs");
/* harmony import */ var _optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../optimized-appear/get-appear-id.mjs */ "./node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs");
/* harmony import */ var _value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/use-will-change/add-will-change.mjs */ "./node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");








/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
        const valueTarget = target[key];
        if (valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = {
            delay,
            ...(0,_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition || {}, key),
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = (0,_optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_1__.getOptimisedAppearId)(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame);
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0,_value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_3__.addValueToWillChange)(visualElement, key);
        value.start((0,_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.animateMotionValue)(key, value, valueTarget, visualElement.shouldReduceMotion && _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_5__.transformProps.has(key)
            ? { type: false }
            : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) {
            animations.push(animation);
        }
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(() => {
                transitionEnd && (0,_render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__.setTarget)(visualElement, transitionEnd);
            });
        });
    }
    return animations;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateVariant: () => (/* binding */ animateVariant),
/* harmony export */   sortByTreeOrder: () => (/* binding */ sortByTreeOrder)
/* harmony export */ });
/* harmony import */ var _render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");
/* harmony import */ var _visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual-element-target.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs");



function animateVariant(visualElement, variant, options = {}) {
    var _a;
    const resolved = (0,_render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, variant, options.type === "exit"
        ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom
        : undefined);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => Promise.all((0,_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_1__.animateTarget)(visualElement, resolved, options))
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(() => last());
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1
        ? (i = 0) => i * staggerChildren
        : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach((child, i) => {
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i),
        }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateVisualElement: () => (/* binding */ animateVisualElement)
/* harmony export */ });
/* harmony import */ var _render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");
/* harmony import */ var _visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-element-target.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs");
/* harmony import */ var _visual_element_variant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual-element-variant.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs");




function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => (0,_visual_element_variant_mjs__WEBPACK_IMPORTED_MODULE_0__.animateVariant)(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = (0,_visual_element_variant_mjs__WEBPACK_IMPORTED_MODULE_0__.animateVariant)(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? (0,_render_utils_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition, options.custom)
            : definition;
        animation = Promise.all((0,_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_2__.animateTarget)(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => {
        visualElement.notify("AnimationComplete", definition);
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optimizedAppearDataAttribute: () => (/* binding */ optimizedAppearDataAttribute),
/* harmony export */   optimizedAppearDataId: () => (/* binding */ optimizedAppearDataId)
/* harmony export */ });
/* harmony import */ var _render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");


const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0,_render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__.camelToDash)(optimizedAppearDataId);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOptimisedAppearId: () => (/* binding */ getOptimisedAppearId)
/* harmony export */ });
/* harmony import */ var _data_id_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-id.mjs */ "./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs");


function getOptimisedAppearId(visualElement) {
    return visualElement.props[_data_id_mjs__WEBPACK_IMPORTED_MODULE_0__.optimizedAppearDataAttribute];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultTransition: () => (/* binding */ getDefaultTransition)
/* harmony export */ });
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");


const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/get-value-transition.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/get-value-transition.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueTransition: () => (/* binding */ getValueTransition)
/* harmony export */ });
function getValueTransition(transition, key) {
    return transition
        ? transition[key] ||
            transition["default"] ||
            transition
        : undefined;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimatable: () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (value, name) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (name === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimationControls: () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return (v !== null &&
        typeof v === "object" &&
        typeof v.start === "function");
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isKeyframesTarget: () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-none.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-none.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNone: () => (/* binding */ isNone)
/* harmony export */ });
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is-zero-value-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs");


function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__.isZeroValueString)(value);
    }
    else {
        return true;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isTransitionDefined: () => (/* binding */ isTransitionDefined)
/* harmony export */ });
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPresent: () => (/* binding */ isPresent),
/* harmony export */   useIsPresent: () => (/* binding */ useIsPresent),
/* harmony export */   usePresence: () => (/* binding */ usePresence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");



/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => register(id), []);
    const safeToRemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => onExitComplete && onExitComplete(id), [id, onExitComplete]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutGroupContext: () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";


const LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LazyContext.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyContext: () => (/* binding */ LazyContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";


const LazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ strict: false });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionConfigContext: () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";


/**
 * @public
 */
const MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateMotionContext: () => (/* binding */ useCreateMotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs");




function useCreateMotionContext(props) {
    const { initial, animate } = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentTreeVariants)(props, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index_mjs__WEBPACK_IMPORTED_MODULE_2__.MotionContext));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionContext: () => (/* binding */ MotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";


const MotionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentTreeVariants: () => (/* binding */ getCurrentTreeVariants)
/* harmony export */ });
/* harmony import */ var _render_utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/is-controlling-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");



function getCurrentTreeVariants(props, context) {
    if ((0,_render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.isControllingVariants)(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || (0,_render_utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__.isVariantLabel)(initial)
                ? initial
                : undefined,
            animate: (0,_render_utils_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__.isVariantLabel)(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresenceContext: () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";


/**
 * @public
 */
const PresenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitchLayoutGroupContext: () => (/* binding */ SwitchLayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";


/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/anticipate.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/anticipate.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anticipate: () => (/* binding */ anticipate)
/* harmony export */ });
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back.mjs */ "./node_modules/framer-motion/dist/es/easing/back.mjs");


const anticipate = (p) => (p *= 2) < 1 ? 0.5 * (0,_back_mjs__WEBPACK_IMPORTED_MODULE_0__.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/back.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/back.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backIn: () => (/* binding */ backIn),
/* harmony export */   backInOut: () => (/* binding */ backInOut),
/* harmony export */   backOut: () => (/* binding */ backOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs");




const backOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__.reverseEasing)(backOut);
const backInOut = /*@__PURE__*/ (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__.mirrorEasing)(backIn);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/circ.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/circ.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circIn: () => (/* binding */ circIn),
/* harmony export */   circInOut: () => (/* binding */ circInOut),
/* harmony export */   circOut: () => (/* binding */ circOut)
/* harmony export */ });
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs");



const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
const circInOut = (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__.mirrorEasing)(circIn);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezier: () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");


/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/ease.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/ease.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easeIn: () => (/* binding */ easeIn),
/* harmony export */   easeInOut: () => (/* binding */ easeInOut),
/* harmony export */   easeOut: () => (/* binding */ easeOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs");


const easeIn = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 0.58, 1);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mirrorEasing: () => (/* binding */ mirrorEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reverseEasing: () => (/* binding */ reverseEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBezierDefinition: () => (/* binding */ isBezierDefinition)
/* harmony export */ });
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEasingArray: () => (/* binding */ isEasingArray)
/* harmony export */ });
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/easing/utils/map.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/easing/utils/map.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easingDefinitionToFunction: () => (/* binding */ easingDefinitionToFunction)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cubic-bezier.mjs */ "./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _ease_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ease.mjs */ "./node_modules/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _circ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../circ.mjs */ "./node_modules/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../back.mjs */ "./node_modules/framer-motion/dist/es/easing/back.mjs");
/* harmony import */ var _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../anticipate.mjs */ "./node_modules/framer-motion/dist/es/easing/anticipate.mjs");
/* harmony import */ var _is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-bezier-definition.mjs */ "./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs");









const easingLookup = {
    linear: _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop,
    easeIn: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circIn,
    circInOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circInOut,
    circOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circOut,
    backIn: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backIn,
    backInOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backInOut,
    backOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backOut,
    anticipate: _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__.anticipate,
};
const easingDefinitionToFunction = (definition) => {
    if ((0,_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isBezierDefinition)(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_7__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/add-dom-event.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDomEvent: () => (/* binding */ addDomEvent)
/* harmony export */ });
function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPointerEvent: () => (/* binding */ addPointerEvent)
/* harmony export */ });
/* harmony import */ var _add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _event_info_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");



function addPointerEvent(target, eventName, handler, options) {
    return (0,_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_0__.addDomEvent)(target, eventName, (0,_event_info_mjs__WEBPACK_IMPORTED_MODULE_1__.addPointerInfo)(handler), options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/event-info.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/event-info.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPointerInfo: () => (/* binding */ addPointerInfo),
/* harmony export */   extractEventInfo: () => (/* binding */ extractEventInfo)
/* harmony export */ });
/* harmony import */ var _utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-primary-pointer.mjs */ "./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs");


function extractEventInfo(event, pointType = "page") {
    return {
        point: {
            x: event[`${pointType}X`],
            y: event[`${pointType}Y`],
        },
    };
}
const addPointerInfo = (handler) => {
    return (event) => (0,_utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_0__.isPrimaryPointer)(event) && handler(event, extractEventInfo(event));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPrimaryPointer: () => (/* binding */ isPrimaryPointer)
/* harmony export */ });
const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    }
    else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */
        return event.isPrimary !== false;
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/batcher.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/batcher.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderBatcher: () => (/* binding */ createRenderBatcher),
/* harmony export */   stepsOrder: () => (/* binding */ stepsOrder)
/* harmony export */ });
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/GlobalConfig.mjs */ "./node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _render_step_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-step.mjs */ "./node_modules/framer-motion/dist/es/frameloop/render-step.mjs");



const stepsOrder = [
    "read", // Read
    "resolveKeyframes", // Write/Read/Write/Read
    "update", // Compute
    "preRender", // Compute
    "render", // Write
    "postRender", // Compute
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    const flagRunNextFrame = () => (runNextFrame = true);
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = (0,_render_step_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderStep)(flagRunNextFrame);
        return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = () => {
        const timestamp = _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionGlobalConfig.useManualTiming
            ? state.timestamp
            : performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed
            ? 1000 / 60
            : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        read.process(state);
        resolveKeyframes.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => {
        for (let i = 0; i < stepsOrder.length; i++) {
            steps[stepsOrder[i]].cancel(process);
        }
    };
    return { schedule, cancel, state, steps };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/frame.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelFrame: () => (/* binding */ cancelFrame),
/* harmony export */   frame: () => (/* binding */ frame),
/* harmony export */   frameData: () => (/* binding */ frameData),
/* harmony export */   frameSteps: () => (/* binding */ frameSteps)
/* harmony export */ });
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _batcher_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batcher.mjs */ "./node_modules/framer-motion/dist/es/frameloop/batcher.mjs");



const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps, } = (0,_batcher_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop, true);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/microtask.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/microtask.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelMicrotask: () => (/* binding */ cancelMicrotask),
/* harmony export */   microtask: () => (/* binding */ microtask)
/* harmony export */ });
/* harmony import */ var _batcher_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batcher.mjs */ "./node_modules/framer-motion/dist/es/frameloop/batcher.mjs");


const { schedule: microtask, cancel: cancelMicrotask } = (0,_batcher_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderBatcher)(queueMicrotask, false);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/render-step.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/render-step.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderStep: () => (/* binding */ createRenderStep)
/* harmony export */ });
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (!queue.has(callback))
                queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [nextFrame, thisFrame];
            // Clear the next frame queue
            nextFrame.clear();
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   time: () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/GlobalConfig.mjs */ "./node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");



let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */
const time = {
    now: () => {
        if (now === undefined) {
            time.set(_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing || _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionGlobalConfig.useManualTiming
                ? _frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp
                : performance.now());
        }
        return now;
    },
    set: (newTime) => {
        now = newTime;
        queueMicrotask(clearTime);
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualElementDragControls: () => (/* binding */ VisualElementDragControls),
/* harmony export */   elementDragControls: () => (/* binding */ elementDragControls)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _pan_PanSession_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pan/PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs");
/* harmony import */ var _utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/constraints.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projection/utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../projection/geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _animation_interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../animation/interfaces/motion-value.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/get-context-window.mjs */ "./node_modules/framer-motion/dist/es/utils/get-context-window.mjs");
/* harmony import */ var _value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../value/use-will-change/add-will-change.mjs */ "./node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");




















const elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
class VisualElementDragControls {
    constructor(visualElement) {
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_0__.createBox)();
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false)
            return;
        const onSessionStart = (event) => {
            const { dragSnapToOrigin } = this.getProps();
            // Stop or pause any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            dragSnapToOrigin ? this.pauseAnimation() : this.stopAnimation();
            if (snapToCursor) {
                this.snapToCursor((0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_1__.extractEventInfo)(event, "page").point);
            }
        };
        const onStart = (event, info) => {
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openGlobalLock)
                    this.openGlobalLock();
                this.openGlobalLock = (0,_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__.getGlobalLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openGlobalLock)
                    return;
            }
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_4__.percent.test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_5__.calcLength)(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_6__.frame.postRender(() => onDragStart(event, info));
            }
            (0,_value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_7__.addValueToWillChange)(this.visualElement, "transform");
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info) => {
            // latestPointerEvent = event
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag, } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openGlobalLock)
                return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag && onDrag(event, info);
        };
        const onSessionEnd = (event, info) => this.stop(event, info);
        const resumeAnimation = () => (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            var _a;
            return this.getAnimationState(axis) === "paused" &&
                ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
        });
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new _pan_PanSession_mjs__WEBPACK_IMPORTED_MODULE_8__.PanSession(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation,
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            contextWindow: (0,_utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_9__.getContextWindow)(this.visualElement),
        });
    }
    stop(event, info) {
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        const { velocity } = info;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_6__.frame.postRender(() => onDragEnd(event, info));
        }
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.panSession && this.panSession.end();
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__.applyConstraints)(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        var _a;
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection &&
            !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(false)
            : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_11__.isRefObject)(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__.calcRelativeConstraints)(layout.layoutBox, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
                if (this.constraints !== false &&
                    this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__.rebaseAxisConstraints)(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_11__.isRefObject)(constraints))
            return false;
        const constraintsElement = constraints.current;
        (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_12__.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout)
            return false;
        const constraintsBox = (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_13__.measurePageBox)(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__.calcViewportConstraints)(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints((0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_14__.convertBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = (0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_14__.convertBoundingBoxToBox)(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd, } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = (constraints && constraints[axis]) || {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition,
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        (0,_value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_7__.addValueToWillChange)(this.visualElement, axis);
        return axisValue.start((0,_animation_interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_15__.animateMotionValue)(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => this.getAxisMotionValue(axis).stop());
    }
    pauseAnimation() {
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => { var _a; return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause(); });
    }
    getAnimationState(axis) {
        var _a;
        return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
        const dragKey = `_drag${axis.toUpperCase()}`;
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (props.initial
                ? props.initial[axis]
                : undefined) || 0);
    }
    snapToCursor(point) {
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection))
                return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                axisValue.set(point[axis] - (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_16__.mixNumber)(min, max, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_11__.isRefObject)(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        const boxProgress = { x: 0, y: 0 };
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue && this.constraints !== false) {
                const latest = axisValue.get();
                boxProgress[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__.calcOrigin)({ min: latest, max: latest }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set((0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_16__.mixNumber)(min, max, boxProgress[axis]));
        });
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        const stopPointerListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_17__.addPointerEvent)(element, "pointerdown", (event) => {
            const { drag, dragListener = true } = this.getProps();
            drag && dragListener && this.start(event);
        });
        const measureDragConstraints = () => {
            const { dragConstraints } = this.getProps();
            if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_11__.isRefObject)(dragConstraints) && dragConstraints.current) {
                this.constraints = this.resolveRefConstraints();
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_6__.frame.read(measureDragConstraints);
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        const stopResizeListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_18__.addDomEvent)(window, "resize", () => this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
            if (this.isDragging && hasLayoutChanged) {
                (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_3__.eachAxis)((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        }));
        return () => {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_10__.defaultElastic, dragMomentum = true, } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
        };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/index.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/index.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragGesture: () => (/* binding */ DragGesture)
/* harmony export */ });
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisualElementDragControls.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs");




class DragGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop;
        this.removeListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop;
        this.controls = new _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__.VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop;
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyConstraints: () => (/* binding */ applyConstraints),
/* harmony export */   calcOrigin: () => (/* binding */ calcOrigin),
/* harmony export */   calcRelativeAxisConstraints: () => (/* binding */ calcRelativeAxisConstraints),
/* harmony export */   calcRelativeConstraints: () => (/* binding */ calcRelativeConstraints),
/* harmony export */   calcViewportAxisConstraints: () => (/* binding */ calcViewportAxisConstraints),
/* harmony export */   calcViewportConstraints: () => (/* binding */ calcViewportConstraints),
/* harmony export */   defaultElastic: () => (/* binding */ defaultElastic),
/* harmony export */   rebaseAxisConstraints: () => (/* binding */ rebaseAxisConstraints),
/* harmony export */   resolveAxisElastic: () => (/* binding */ resolveAxisElastic),
/* harmony export */   resolveDragElastic: () => (/* binding */ resolveDragElastic),
/* harmony export */   resolvePointElastic: () => (/* binding */ resolvePointElastic)
/* harmony export */ });
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");





/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic
            ? (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(min, point, elastic.min)
            : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic
            ? (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(max, point, elastic.max)
            : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        [min, max] = [max, min];
    }
    return { min, max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_1__.calcLength)(source);
    const targetLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_1__.calcLength)(target);
    if (targetLength > sourceLength) {
        origin = (0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_2__.progress)(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = (0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_2__.progress)(source.min, source.max - targetLength, target.min);
    }
    return (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__.clamp)(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number"
        ? dragElastic
        : dragElastic[label] || 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLock: () => (/* binding */ createLock),
/* harmony export */   getGlobalLock: () => (/* binding */ getGlobalLock),
/* harmony export */   isDragActive: () => (/* binding */ isDragActive)
/* harmony export */ });
function createLock(name) {
    let lock = null;
    return () => {
        const openLock = () => {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    let lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        const openHorizontal = globalHorizontalLock();
        const openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = () => {
                openHorizontal();
                openVertical();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal)
                openHorizontal();
            if (openVertical)
                openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    const openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/focus.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/focus.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusGesture: () => (/* binding */ FocusGesture)
/* harmony export */ });
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");




class FocusGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_2__.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_2__.addDomEvent)(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/hover.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/hover.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoverGesture: () => (/* binding */ HoverGesture)
/* harmony export */ });
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");






function addHoverEvent(node, isActive) {
    const eventName = isActive ? "pointerenter" : "pointerleave";
    const callbackName = isActive ? "onHoverStart" : "onHoverEnd";
    const handleEvent = (event, info) => {
        if (event.pointerType === "touch" || (0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_0__.isDragActive)())
            return;
        const props = node.getProps();
        if (node.animationState && props.whileHover) {
            node.animationState.setActive("whileHover", isActive);
        }
        const callback = props[callbackName];
        if (callback) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.postRender(() => callback(event, info));
        }
    };
    return (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_2__.addPointerEvent)(node.current, eventName, handleEvent, {
        passive: !node.getProps()[callbackName],
    });
}
class HoverGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_3__.Feature {
    mount() {
        this.unmount = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__.pipe)(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
    }
    unmount() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanSession: () => (/* binding */ PanSession)
/* harmony export */ });
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _utils_distance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/distance.mjs */ "./node_modules/framer-motion/dist/es/utils/distance.mjs");
/* harmony import */ var _events_utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/utils/is-primary-pointer.mjs */ "./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");








/**
 * @internal
 */
class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        /**
         * @internal
         */
        this.contextWindow = window;
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            const isDistancePastThreshold = (0,_utils_distance_mjs__WEBPACK_IMPORTED_MODULE_0__.distance2D)(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            const { point } = info;
            const { timestamp } = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData;
            this.history.push({ ...point, timestamp });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info) => {
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info) => {
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            if (this.dragSnapToOrigin)
                resumeAnimation && resumeAnimation();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const panInfo = getPanInfo(event.type === "pointercancel"
                ? this.lastMoveEventInfo
                : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!(0,_events_utils_is_primary_pointer_mjs__WEBPACK_IMPORTED_MODULE_2__.isPrimaryPointer)(event))
            return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.contextWindow = contextWindow || window;
        const info = (0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_3__.extractEventInfo)(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData;
        this.history = [{ ...point, timestamp }];
        const { onSessionStart } = handlers;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.contextWindow, "pointermove", this.handlePointerMove), (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.contextWindow, "pointerup", this.handlePointerUp), (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.cancelFrame)(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__.secondsToMilliseconds)(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    const time = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__.millisecondsToSeconds)(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/pan/index.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/pan/index.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanGesture: () => (/* binding */ PanGesture)
/* harmony export */ });
/* harmony import */ var _PanSession_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/get-context-window.mjs */ "./node_modules/framer-motion/dist/es/utils/get-context-window.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");







const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.postRender(() => handler(event, info));
    }
};
class PanGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__.Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new _PanSession_mjs__WEBPACK_IMPORTED_MODULE_3__.PanSession(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: (0,_utils_get_context_window_mjs__WEBPACK_IMPORTED_MODULE_4__.getContextWindow)(this.node),
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: onPan,
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.postRender(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/press.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/press.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PressGesture: () => (/* binding */ PressGesture)
/* harmony export */ });
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");
/* harmony import */ var _events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/add-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs");
/* harmony import */ var _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../motion/features/Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-node-or-child.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");










function fireSyntheticPointerEvent(name, handler) {
    if (!handler)
        return;
    const syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, (0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_0__.extractEventInfo)(syntheticPointerEvent));
}
class PressGesture extends _motion_features_Feature_mjs__WEBPACK_IMPORTED_MODULE_1__.Feature {
    constructor() {
        super(...arguments);
        this.removeStartListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
        this.removeEndListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
        this.removeAccessibleListeners = _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_2__.noop;
        this.startPointerPress = (startEvent, startInfo) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const props = this.node.getProps();
            const endPointerPress = (endEvent, endInfo) => {
                if (!this.checkPressEnd())
                    return;
                const { onTap, onTapCancel, globalTapTarget } = this.node.getProps();
                /**
                 * We only count this as a tap gesture if the event.target is the same
                 * as, or a child of, this component's element
                 */
                const handler = !globalTapTarget &&
                    !(0,_utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_3__.isNodeOrChild)(this.node.current, endEvent.target)
                    ? onTapCancel
                    : onTap;
                if (handler) {
                    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__.frame.update(() => handler(endEvent, endInfo));
                }
            };
            const removePointerUpListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointerup", endPointerPress, {
                passive: !(props.onTap || props["onPointerUp"]),
            });
            const removePointerCancelListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), {
                passive: !(props.onTapCancel ||
                    props["onPointerCancel"]),
            });
            this.removeEndListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(removePointerUpListener, removePointerCancelListener);
            this.startPress(startEvent, startInfo);
        };
        this.startAccessiblePress = () => {
            const handleKeydown = (keydownEvent) => {
                if (keydownEvent.key !== "Enter" || this.isPressing)
                    return;
                const handleKeyup = (keyupEvent) => {
                    if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
                        return;
                    fireSyntheticPointerEvent("up", (event, info) => {
                        const { onTap } = this.node.getProps();
                        if (onTap) {
                            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__.frame.postRender(() => onTap(event, info));
                        }
                    });
                };
                this.removeEndListeners();
                this.removeEndListeners = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "keyup", handleKeyup);
                fireSyntheticPointerEvent("down", (event, info) => {
                    this.startPress(event, info);
                });
            };
            const removeKeydownListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "keydown", handleKeydown);
            const handleBlur = () => {
                if (!this.isPressing)
                    return;
                fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
            };
            const removeBlurListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "blur", handleBlur);
            this.removeAccessibleListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(removeKeydownListener, removeBlurListener);
        };
    }
    startPress(event, info) {
        this.isPressing = true;
        const { onTapStart, whileTap } = this.node.getProps();
        /**
         * Ensure we trigger animations before firing event callback
         */
        if (whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", true);
        }
        if (onTapStart) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__.frame.postRender(() => onTapStart(event, info));
        }
    }
    checkPressEnd() {
        this.removeEndListeners();
        this.isPressing = false;
        const props = this.node.getProps();
        if (props.whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", false);
        }
        return !(0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_8__.isDragActive)();
    }
    cancelPress(event, info) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel } = this.node.getProps();
        if (onTapCancel) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__.frame.postRender(() => onTapCancel(event, info));
        }
    }
    mount() {
        const props = this.node.getProps();
        const removePointerListener = (0,_events_add_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(props.onTapStart ||
                props["onPointerStart"]),
        });
        const removeFocusListener = (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_7__.addDomEvent)(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(removePointerListener, removeFocusListener);
    }
    unmount() {
        this.removeStartListeners();
        this.removeEndListeners();
        this.removeAccessibleListeners();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNodeOrChild: () => (/* binding */ isNodeOrChild)
/* harmony export */ });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/Feature.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Feature: () => (/* binding */ Feature)
/* harmony export */ });
class Feature {
    constructor(node) {
        this.isMounted = false;
        this.node = node;
    }
    update() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExitAnimationFeature: () => (/* binding */ ExitAnimationFeature)
/* harmony export */ });
/* harmony import */ var _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");


let id = 0;
class ExitAnimationFeature extends _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor() {
        super(...arguments);
        this.id = id++;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent, onExitComplete } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) {
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
        if (onExitComplete && !isPresent) {
            exitAnimation.then(() => onExitComplete(this.id));
        }
    }
    mount() {
        const { register } = this.node.presenceContext || {};
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() { }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFeature: () => (/* binding */ AnimationFeature)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../render/utils/animation-state.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs");
/* harmony import */ var _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");




class AnimationFeature extends _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = (0,_render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createAnimationState)(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_2__.isAnimationControls)(animate)) {
            this.unmountControls = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() {
        var _a;
        this.node.animationState.reset();
        (_a = this.unmountControls) === null || _a === void 0 ? void 0 : _a.call(this);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animations.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animations: () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var _animation_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/index.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs");
/* harmony import */ var _animation_exit_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/exit.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs");



const animations = {
    animation: {
        Feature: _animation_index_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationFeature,
    },
    exit: {
        Feature: _animation_exit_mjs__WEBPACK_IMPORTED_MODULE_1__.ExitAnimationFeature,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureDefinitions: () => (/* binding */ featureDefinitions)
/* harmony export */ });
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/drag.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drag: () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _gestures_drag_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/drag/index.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/index.mjs");
/* harmony import */ var _gestures_pan_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gestures/pan/index.mjs */ "./node_modules/framer-motion/dist/es/gestures/pan/index.mjs");
/* harmony import */ var _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/MeasureLayout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs");
/* harmony import */ var _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projection/node/HTMLProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs");





const drag = {
    pan: {
        Feature: _gestures_pan_index_mjs__WEBPACK_IMPORTED_MODULE_0__.PanGesture,
    },
    drag: {
        Feature: _gestures_drag_index_mjs__WEBPACK_IMPORTED_MODULE_1__.DragGesture,
        ProjectionNode: _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_2__.HTMLProjectionNode,
        MeasureLayout: _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_3__.MeasureLayout,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gestureAnimations: () => (/* binding */ gestureAnimations)
/* harmony export */ });
/* harmony import */ var _gestures_hover_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestures/hover.mjs */ "./node_modules/framer-motion/dist/es/gestures/hover.mjs");
/* harmony import */ var _gestures_focus_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/focus.mjs */ "./node_modules/framer-motion/dist/es/gestures/focus.mjs");
/* harmony import */ var _gestures_press_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/press.mjs */ "./node_modules/framer-motion/dist/es/gestures/press.mjs");
/* harmony import */ var _viewport_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport/index.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs");





const gestureAnimations = {
    inView: {
        Feature: _viewport_index_mjs__WEBPACK_IMPORTED_MODULE_0__.InViewFeature,
    },
    tap: {
        Feature: _gestures_press_mjs__WEBPACK_IMPORTED_MODULE_1__.PressGesture,
    },
    focus: {
        Feature: _gestures_focus_mjs__WEBPACK_IMPORTED_MODULE_2__.FocusGesture,
    },
    hover: {
        Feature: _gestures_hover_mjs__WEBPACK_IMPORTED_MODULE_3__.HoverGesture,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layout: () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projection/node/HTMLProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs");
/* harmony import */ var _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/MeasureLayout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs");



const layout = {
    layout: {
        ProjectionNode: _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_0__.HTMLProjectionNode,
        MeasureLayout: _layout_MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_1__.MeasureLayout,
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeasureLayout: () => (/* binding */ MeasureLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");
/* harmony import */ var _projection_node_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projection/node/state.mjs */ "./node_modules/framer-motion/dist/es/projection/node/state.mjs");
/* harmony import */ var _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../projection/styles/scale-border-radius.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs");
/* harmony import */ var _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../projection/styles/scale-box-shadow.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs");
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _frameloop_microtask_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../frameloop/microtask.mjs */ "./node_modules/framer-motion/dist/es/frameloop/microtask.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");
"use client";












class MeasureLayoutWithContext extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        (0,_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_2__.addScaleCorrector)(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup.group)
                layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", () => {
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: () => this.safeToRemove(),
            });
        }
        _projection_node_state_mjs__WEBPACK_IMPORTED_MODULE_3__.globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const projection = visualElement.projection;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_4__.frame.postRender(() => {
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            _frameloop_microtask_mjs__WEBPACK_IMPORTED_MODULE_5__.microtask.postRender(() => {
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = (0,_components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_6__.usePresence)();
    const layoutGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_7__.LayoutGroupContext);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_8__.SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}
const defaultScaleCorrectors = {
    borderRadius: {
        ..._projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_9__.correctBorderRadius,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_9__.correctBorderRadius,
    borderTopRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_9__.correctBorderRadius,
    borderBottomLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_9__.correctBorderRadius,
    borderBottomRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_9__.correctBorderRadius,
    boxShadow: _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_10__.correctBoxShadow,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/load-features.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/load-features.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFeatures: () => (/* binding */ loadFeatures)
/* harmony export */ });
/* harmony import */ var _definitions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");


function loadFeatures(features) {
    for (const key in features) {
        _definitions_mjs__WEBPACK_IMPORTED_MODULE_0__.featureDefinitions[key] = {
            ..._definitions_mjs__WEBPACK_IMPORTED_MODULE_0__.featureDefinitions[key],
            ...features[key],
        };
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InViewFeature: () => (/* binding */ InViewFeature)
/* harmony export */ });
/* harmony import */ var _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Feature.mjs */ "./node_modules/framer-motion/dist/es/motion/features/Feature.mjs");
/* harmony import */ var _observers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs");



const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends _Feature_mjs__WEBPACK_IMPORTED_MODULE_0__.Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        return (0,_observers_mjs__WEBPACK_IMPORTED_MODULE_1__.observeIntersection)(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() { }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeIntersection: () => (/* binding */ observeIntersection)
/* harmony export */ });
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRendererMotionComponent: () => (/* binding */ createRendererMotionComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/use-visual-element.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs");
/* harmony import */ var _utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/use-motion-ref.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs");
/* harmony import */ var _context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/MotionContext/create.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs");
/* harmony import */ var _features_load_features_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/load-features.mjs */ "./node_modules/framer-motion/dist/es/motion/features/load-features.mjs");
/* harmony import */ var _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");
/* harmony import */ var _utils_symbol_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/symbol.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs");
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _features_definitions_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");
"use client";















/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component, }) {
    preloadedFeatures && (0,_features_load_features_mjs__WEBPACK_IMPORTED_MODULE_2__.loadFeatures)(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */
        let MeasureLayout;
        const configAndProps = {
            ...(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.MotionConfigContext),
            ...props,
            layoutId: useLayoutId(props),
        };
        const { isStatic } = configAndProps;
        const context = (0,_context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_4__.useCreateMotionContext)(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_5__.isBrowser) {
            useStrictMode(configAndProps, preloadedFeatures);
            const layoutProjection = getProjectionFunctionality(configAndProps);
            MeasureLayout = layoutProjection.MeasureLayout;
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = (0,_utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_6__.useVisualElement)(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_7__.MotionContext.Provider, { value: context, children: [MeasureLayout && context.visualElement ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MeasureLayout, { visualElement: context.visualElement, ...configAndProps })) : null, useRender(Component, props, (0,_utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_8__.useMotionRef)(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)] }));
    }
    const ForwardRefMotionComponent = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(MotionComponent);
    ForwardRefMotionComponent[_utils_symbol_mjs__WEBPACK_IMPORTED_MODULE_9__.motionComponentSymbol] = Component;
    return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_10__.LayoutGroupContext).id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_11__.LazyContext).strict;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if ( true &&
        preloadedFeatures &&
        isStrict) {
        const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
        configAndProps.ignoreStrict
            ? (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_12__.warning)(false, strictMessage)
            : (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_12__.invariant)(false, strictMessage);
    }
}
function getProjectionFunctionality(props) {
    const { drag, layout } = _features_definitions_mjs__WEBPACK_IMPORTED_MODULE_13__.featureDefinitions;
    if (!drag && !layout)
        return {};
    const combined = { ...drag, ...layout };
    return {
        MeasureLayout: (drag === null || drag === void 0 ? void 0 : drag.isEnabled(props)) || (layout === null || layout === void 0 ? void 0 : layout.isEnabled(props))
            ? combined.MeasureLayout
            : undefined,
        ProjectionNode: combined.ProjectionNode,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isForcedMotionValue: () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");



function isForcedMotionValue(key, { layout, layoutId }) {
    return (_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__.scaleCorrectors[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   motionComponentSymbol: () => (/* binding */ motionComponentSymbol)
/* harmony export */ });
const motionComponentSymbol = Symbol.for("motionComponentSymbol");




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMotionRef: () => (/* binding */ useMotionRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((instance) => {
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            if (instance) {
                visualElement.mount(instance);
            }
            else {
                visualElement.unmount();
            }
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__.isRefObject)(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useVisualElement: () => (/* binding */ useVisualElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _animation_optimized_appear_data_id_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/optimized-appear/data-id.mjs */ "./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs");
/* harmony import */ var _frameloop_microtask_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../frameloop/microtask.mjs */ "./node_modules/framer-motion/dist/es/frameloop/microtask.mjs");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");











function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor) {
    var _a, _b;
    const { visualElement: parent } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
    const lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_2__.LazyContext);
    const presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__.PresenceContext);
    const reducedMotionConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_4__.MotionConfigContext).reducedMotion;
    const visualElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
        });
    }
    const visualElement = visualElementRef.current;
    /**
     * Load Motion gesture and animation features. These are rendered as renderless
     * components so each feature can optionally make use of React lifecycle methods.
     */
    const initialLayoutGroupConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_5__.SwitchLayoutGroupContext);
    if (visualElement &&
        !visualElement.projection &&
        ProjectionNodeConstructor &&
        (visualElement.type === "html" || visualElement.type === "svg")) {
        createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => {
        /**
         * Check the component has already mounted before calling
         * `update` unnecessarily. This ensures we skip the initial update.
         */
        if (visualElement && isMounted.current) {
            visualElement.update(props, presenceContext);
        }
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */
    const optimisedAppearId = props[_animation_optimized_appear_data_id_mjs__WEBPACK_IMPORTED_MODULE_6__.optimizedAppearDataAttribute];
    const wantsHandoff = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Boolean(optimisedAppearId) &&
        !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) &&
        ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_7__.useIsomorphicLayoutEffect)(() => {
        if (!visualElement)
            return;
        isMounted.current = true;
        window.MotionIsMounted = true;
        visualElement.updateFeatures();
        _frameloop_microtask_mjs__WEBPACK_IMPORTED_MODULE_8__.microtask.render(visualElement.render);
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */
        if (wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!visualElement)
            return;
        if (!wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        if (wantsHandoff.current) {
            // This ensures all future calls to animateChanges() in this component will run in useEffect
            queueMicrotask(() => {
                var _a;
                (_a = window.MotionHandoffMarkAsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId);
            });
            wantsHandoff.current = false;
        }
    });
    return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"]
        ? undefined
        : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_9__.isRefObject)(dragConstraints)),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig,
        layoutScroll,
        layoutRoot,
    });
}
function getClosestProjectingNode(visualElement) {
    if (!visualElement)
        return undefined;
    return visualElement.options.allowProjection !== false
        ? visualElement.projection
        : getClosestProjectingNode(visualElement.parent);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeUseVisualState: () => (/* binding */ makeUseVisualState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _render_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/resolve-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/is-controlling-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");









function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = (instance) => onMount(props, instance, state);
    }
    return state;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
    const presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__.PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__.useConstant)(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.resolveMotionValue)(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = (0,_render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.isControllingVariants)(props);
    const isVariantNode$1 = (0,_render_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.isVariantNode)(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !(0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__.isAnimationControls)(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        for (let i = 0; i < list.length; i++) {
            const resolved = (0,_render_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_7__.resolveVariantFromProps)(props, list[i]);
            if (resolved) {
                const { transitionEnd, transition, ...target } = resolved;
                for (const key in target) {
                    let valueTarget = target[key];
                    if (Array.isArray(valueTarget)) {
                        /**
                         * Take final keyframe if the initial animation is blocked because
                         * we want to initialise at the end of that blocked animation.
                         */
                        const index = isInitialAnimationBlocked
                            ? valueTarget.length - 1
                            : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) {
                        values[key] = valueTarget;
                    }
                }
                for (const key in transitionEnd) {
                    values[key] = transitionEnd[key];
                }
            }
        }
    }
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidMotionProp: () => (/* binding */ isValidMotionProp)
/* harmony export */ });
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        key.startsWith("onLayout") ||
        validMotionProps.has(key));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixValues: () => (/* binding */ mixValues)
/* harmony export */ });
/* harmony import */ var _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../easing/circ.mjs */ "./node_modules/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");






const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(0, 
        // TODO Reinstate this if only child
        lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
        target.opacityExit = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
    }
    /**
     * Mix border radius
     */
    for (let i = 0; i < numBorders; i++) {
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.percent.test(leadRadius) || _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined
        ? values[radiusName]
        : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circOut);
const easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_3__.noop);
function compress(min, max, easing) {
    return (p) => {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing((0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_4__.progress)(min, max, p));
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertBoundingBoxToBox: () => (/* binding */ convertBoundingBoxToBox),
/* harmony export */   convertBoxToBoundingBox: () => (/* binding */ convertBoxToBoundingBox),
/* harmony export */   transformBoxPoints: () => (/* binding */ transformBoxPoints)
/* harmony export */ });
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyAxisDeltaInto: () => (/* binding */ copyAxisDeltaInto),
/* harmony export */   copyAxisInto: () => (/* binding */ copyAxisInto),
/* harmony export */   copyBoxInto: () => (/* binding */ copyBoxInto)
/* harmony export */ });
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
/**
 * Reset a delta to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAxisDelta: () => (/* binding */ applyAxisDelta),
/* harmony export */   applyBoxDelta: () => (/* binding */ applyBoxDelta),
/* harmony export */   applyPointDelta: () => (/* binding */ applyPointDelta),
/* harmony export */   applyTreeDeltas: () => (/* binding */ applyTreeDeltas),
/* harmony export */   scalePoint: () => (/* binding */ scalePoint),
/* harmony export */   transformAxis: () => (/* binding */ transformAxis),
/* harmony export */   transformBox: () => (/* binding */ transformBox),
/* harmony export */   translateAxis: () => (/* binding */ translateAxis)
/* harmony export */ });
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");



/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const { visualElement } = node.options;
        if (visualElement &&
            visualElement.props.style &&
            visualElement.props.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.hasTransform)(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    if (treeScale.x < TREE_SCALE_SNAP_MAX &&
        treeScale.x > TREE_SCALE_SNAP_MIN) {
        treeScale.x = 1.0;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX &&
        treeScale.y > TREE_SCALE_SNAP_MIN) {
        treeScale.y = 1.0;
    }
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAxisDelta: () => (/* binding */ calcAxisDelta),
/* harmony export */   calcBoxDelta: () => (/* binding */ calcBoxDelta),
/* harmony export */   calcLength: () => (/* binding */ calcLength),
/* harmony export */   calcRelativeAxis: () => (/* binding */ calcRelativeAxis),
/* harmony export */   calcRelativeAxisPosition: () => (/* binding */ calcRelativeAxisPosition),
/* harmony export */   calcRelativeBox: () => (/* binding */ calcRelativeBox),
/* harmony export */   calcRelativePosition: () => (/* binding */ calcRelativePosition),
/* harmony export */   isNear: () => (/* binding */ isNear)
/* harmony export */ });
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");


const SCALE_PRECISION = 0.0001;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate =
        (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(target.min, target.max, delta.origin) - delta.originPoint;
    if ((delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX) ||
        isNaN(delta.scale)) {
        delta.scale = 1.0;
    }
    if ((delta.translate >= TRANSLATE_MIN &&
        delta.translate <= TRANSLATE_MAX) ||
        isNaN(delta.translate)) {
        delta.translate = 0.0;
    }
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAxisDelta: () => (/* binding */ removeAxisDelta),
/* harmony export */   removeAxisTransforms: () => (/* binding */ removeAxisTransforms),
/* harmony export */   removeBoxTransforms: () => (/* binding */ removeBoxTransforms),
/* harmony export */   removePointDelta: () => (/* binding */ removePointDelta)
/* harmony export */ });
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");




/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_2__.mixNumber)(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    let originPoint = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_2__.mixNumber)(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAxis: () => (/* binding */ createAxis),
/* harmony export */   createAxisDelta: () => (/* binding */ createAxisDelta),
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   createDelta: () => (/* binding */ createDelta)
/* harmony export */ });
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aspectRatio: () => (/* binding */ aspectRatio),
/* harmony export */   axisDeltaEquals: () => (/* binding */ axisDeltaEquals),
/* harmony export */   axisEquals: () => (/* binding */ axisEquals),
/* harmony export */   axisEqualsRounded: () => (/* binding */ axisEqualsRounded),
/* harmony export */   boxEquals: () => (/* binding */ boxEquals),
/* harmony export */   boxEqualsRounded: () => (/* binding */ boxEqualsRounded),
/* harmony export */   isDeltaZero: () => (/* binding */ isDeltaZero)
/* harmony export */ });
/* harmony import */ var _delta_calc_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");


function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return (Math.round(a.min) === Math.round(b.min) &&
        Math.round(a.max) === Math.round(b.max));
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return (0,_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_0__.calcLength)(box.x) / (0,_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_0__.calcLength)(box.y);
}
function axisDeltaEquals(a, b) {
    return (a.translate === b.translate &&
        a.scale === b.scale &&
        a.originPoint === b.originPoint);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentProjectionNode: () => (/* binding */ DocumentProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events/add-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/add-dom-event.mjs");



const DocumentProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    attachResizeListener: (ref, notify) => (0,_events_add_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.addDomEvent)(ref, "resize", notify),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => true,
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLProjectionNode: () => (/* binding */ HTMLProjectionNode),
/* harmony export */   rootProjectionNode: () => (/* binding */ rootProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs");



const rootProjectionNode = {
    current: undefined,
};
const HTMLProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    measureScroll: (instance) => ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }),
    defaultParent: () => {
        if (!rootProjectionNode.current) {
            const documentNode = new _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__.DocumentProjectionNode({});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed"),
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanDirtyNodes: () => (/* binding */ cleanDirtyNodes),
/* harmony export */   createProjectionNode: () => (/* binding */ createProjectionNode),
/* harmony export */   mixAxis: () => (/* binding */ mixAxis),
/* harmony export */   mixAxisDelta: () => (/* binding */ mixAxisDelta),
/* harmony export */   mixBox: () => (/* binding */ mixBox),
/* harmony export */   propagateDirtyNodes: () => (/* binding */ propagateDirtyNodes)
/* harmony export */ });
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../animation/mix-values.mjs */ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs");
/* harmony import */ var _geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/copy.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");
/* harmony import */ var _geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/delta-remove.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs");
/* harmony import */ var _animation_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animation/utils/get-value-transition.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/get-value-transition.mjs");
/* harmony import */ var _geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../geometry/utils.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs");
/* harmony import */ var _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/stack.mjs */ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs");
/* harmony import */ var _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _styles_transform_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../styles/transform.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs");
/* harmony import */ var _utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");
/* harmony import */ var _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/flat-tree.mjs */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/framer-motion/dist/es/projection/node/state.mjs");
/* harmony import */ var _utils_delay_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/delay.mjs */ "./node_modules/framer-motion/dist/es/utils/delay.mjs");
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/dom/utils/is-svg-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs");
/* harmony import */ var _animation_animate_single_value_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../animation/animate/single-value.mjs */ "./node_modules/framer-motion/dist/es/animation/animate/single-value.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../frameloop/sync-time.mjs */ "./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_microtask_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../frameloop/microtask.mjs */ "./node_modules/framer-motion/dist/es/frameloop/microtask.mjs");
/* harmony import */ var _animation_optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animation/optimized-appear/get-appear-id.mjs */ "./node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs");
/* harmony import */ var _geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");




























const metrics = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
};
const isDebug = typeof window !== "undefined" && window.MotionDebug !== undefined;
const transformAxes = ["", "X", "Y", "Z"];
const hiddenVisibility = { visibility: "hidden" };
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    // Record the distorting transform and then temporarily set it to 0
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) {
            sharedAnimationValues[key] = 0;
        }
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode)
        return;
    const { visualElement } = projectionNode.options;
    if (!visualElement)
        return;
    const appearId = (0,_animation_optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_0__.getOptimisedAppearId)(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        const { layout, layoutId } = projectionNode.options;
        window.MotionCancelOptimisedAnimation(appearId, "transform", _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame, !(layout || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(parent);
    }
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
            /**
             * A unique ID generated for every projection node.
             */
            this.id = id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */
            this.animationId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */
            this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */
            this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */
            this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * Store whether this node has been checked for optimised appear animations. As
             * effects fire bottom-up, and we want to look up the tree for appear animations,
             * this makes sure we only check each path once, stopping at nodes that
             * have already been checked.
             */
            this.hasCheckedOptimisedAppear = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.scheduleUpdate = () => this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = () => {
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */
            this.updateProjection = () => {
                this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */
                if (isDebug) {
                    metrics.totalNodes =
                        metrics.resolvedTargetDeltas =
                            metrics.recalculatedProjection =
                                0;
                }
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                if (isDebug) {
                    window.MotionDebug.record(metrics);
                }
            };
            /**
             * Frame calculations
             */
            this.resolvedRelativeTargetAt = 0.0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [...parent.path, parent] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for (let i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_2__.FlatTree();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_3__.SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */
        mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = (0,_render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_4__.isSVGElement)(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (isLayoutDirty && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = false);
                attachResizeListener(instance, () => {
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = (0,_utils_delay_mjs__WEBPACK_IMPORTED_MODULE_5__.delay)(resizeUnblockUpdate, 250);
                    if (_state_mjs__WEBPACK_IMPORTED_MODULE_6__.globalProjectionState.hasAnimatedSinceResize) {
                        _state_mjs__WEBPACK_IMPORTED_MODULE_6__.globalProjectionState.hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout, }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete, } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    const targetChanged = !this.targetLayout ||
                        !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.boxEqualsRounded)(this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged;
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                    if (this.options.layoutRoot ||
                        (this.resumeFrom && this.resumeFrom.instance) ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (targetChanged || !this.currentAnimation))) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                        const animationOptions = {
                            ...(0,_animation_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_8__.getValueTransition)(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete,
                        };
                        if (visualElement.shouldReduceMotion ||
                            this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.cancelFrame)(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                false);
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetSkewAndRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            /**
             * If we're running optimised appear animations then these must be
             * cancelled before measuring the DOM. This is so we can measure
             * the true layout of the element rather than the WAAPI animation
             * which will be unaffected by the resetSkewAndRotate step.
             *
             * Note: This is a DOM write. Worst case scenario is this is sandwiched
             * between other snapshot reads which will cause unnecessary style recalculations.
             * This has to happen here though, as we don't yet know which nodes will need
             * snapshots in startUpdate(), but we only want to cancel optimised animations
             * if a layout animation measurement is actually going to be affected by them.
             */
            if (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear) {
                cancelTreeOptimisedTransformAnimations(this);
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout)
                return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating) {
                this.nodes.forEach(clearIsLayoutDirty);
            }
            this.isUpdating = false;
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */
            const now = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_9__.time.now();
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.delta = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__.clamp)(0, 1000 / 60, now - _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.timestamp);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.timestamp = now;
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.isProcessing = true;
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameSteps.update.process(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameSteps.preRender.process(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameSteps.render.process(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                _frameloop_microtask_mjs__WEBPACK_IMPORTED_MODULE_11__.microtask.read(this.scheduleUpdate);
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.postRender(() => {
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                }
                else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            this.snapshot = this.measure();
        }
        updateLayout() {
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (let i = 0; i < this.path.length; i++) {
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement) {
                const isRoot = checkIsScrollRoot(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot,
                    offset: measureScroll(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : isRoot,
                };
            }
        }
        resetTransform() {
            if (!resetTransform)
                return;
            const isResetRequested = this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout;
            const hasProjection = this.projectionDelta && !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.isDeltaZero)(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                (hasProjection ||
                    (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasTransform)(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */
            if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
            };
        }
        measurePageBox() {
            var _a;
            const { visualElement } = this.options;
            if (!visualElement)
                return (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            const box = visualElement.measureViewportBox();
            const wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
            if (!wasInScrollRoot) {
                // Remove viewport scroll to give page-relative coordinates
                const { scroll } = this.root;
                if (scroll) {
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.translateAxis)(box.x, scroll.offset.x);
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.translateAxis)(box.y, scroll.offset.y);
                }
            }
            return box;
        }
        removeElementScroll(box) {
            var _a;
            const boxWithoutScroll = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(boxWithoutScroll, box);
            if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) {
                return boxWithoutScroll;
            }
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (scroll.wasRoot) {
                        (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(boxWithoutScroll, box);
                    }
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.translateAxis)(boxWithoutScroll.x, scroll.offset.x);
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.translateAxis)(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.transformBox)(withTransforms, {
                        x: -node.scroll.offset.x,
                        y: -node.scroll.offset.y,
                    });
                }
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasTransform)(node.latestValues))
                    continue;
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.transformBox)(withTransforms, node.latestValues);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.transformBox)(withTransforms, this.latestValues);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!node.instance)
                    continue;
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasTransform)(node.latestValues))
                    continue;
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasScale)(node.latestValues) && node.updateSnapshot();
                const sourceBox = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                const nodeBox = node.measurePageBox();
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(sourceBox, nodeBox);
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_16__.removeBoxTransforms)(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_16__.removeBoxTransforms)(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true,
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent)
                return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */
            if (this.relativeParent.resolvedRelativeTargetAt !==
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            var _a;
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */
            const canSkip = !(forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize);
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            this.resolvedRelativeTargetAt = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.timestamp;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            if (!this.targetDelta && !this.relativeTarget) {
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    relativeParent.layout &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcRelativePosition)(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                this.targetWithTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.layoutBox);
                }
                else {
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(this.target, this.layout.layoutBox);
                }
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.applyBoxDelta)(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    Boolean(relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !relativeParent.options.layoutScroll &&
                    relativeParent.target &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcRelativePosition)(this.relativeTargetOrigin, this.target, relativeParent.target);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * Increase debug counter for resolved target deltas
             */
            if (isDebug) {
                metrics.resolvedTargetDeltas++;
            }
        }
        getClosestProjectingParent() {
            if (!this.parent ||
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasScale)(this.parent.latestValues) ||
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.has2DTranslate)(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout);
        }
        calcProjection() {
            var _a;
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */
            if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */
            if (isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */
            if (this.resolvedRelativeTargetAt === _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frameData.timestamp) {
                canSkip = false;
            }
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */
            const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */
            if (lead.layout &&
                !lead.target &&
                (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
                lead.targetWithTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */
                if (this.prevProjectionDelta) {
                    this.createProjectionDeltas();
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta || !this.prevProjectionDelta) {
                this.createProjectionDeltas();
            }
            else {
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyAxisDeltaInto)(this.prevProjectionDelta.x, this.projectionDelta.x);
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyAxisDeltaInto)(this.prevProjectionDelta.y, this.projectionDelta.y);
            }
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            if (this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY ||
                !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.axisDeltaEquals)(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.axisDeltaEquals)(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */
            if (isDebug) {
                metrics.recalculatedProjection++;
            }
        }
        hide() {
            this.isVisible = false;
            // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
            // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            var _a;
            (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createDelta)();
            this.projectionDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createDelta)();
            this.projectionDeltaWithTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createDelta)();
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot
                ? snapshot.latestValues
                : {};
            const mixedValues = { ...this.latestValues };
            const targetDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createDelta)();
            if (!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest) => {
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout) {
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcRelativePosition)(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */
                    if (prevRelativeTarget &&
                        (0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.boxEquals)(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget)
                        prevRelativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    (0,_animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_18__.mixValues)(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation && this.currentAnimation.stop();
            if (this.resumingFrom && this.resumingFrom.currentAnimation) {
                this.resumingFrom.currentAnimation.stop();
            }
            if (this.pendingAnimation) {
                (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.cancelFrame)(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.update(() => {
                _state_mjs__WEBPACK_IMPORTED_MODULE_6__.globalProjectionState.hasAnimatedSinceResize = true;
                this.currentAnimation = (0,_animation_animate_single_value_mjs__WEBPACK_IMPORTED_MODULE_19__.animateSingleValue)(0, animationTarget, {
                    ...options,
                    onUpdate: (latest) => {
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: () => {
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    },
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout)
                return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */
            if (this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                const xLength = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcLength)(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcLength)(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_15__.copyBoxInto)(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_14__.transformBox)(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_20__.NodeStack());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity
                    ? config.shouldPreserveFollowOpacity(node)
                    : undefined,
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        }
        getPrevLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity, } = {}) {
            const stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        }
        resetSkewAndRotation() {
            const { visualElement } = this.options;
            if (!visualElement)
                return;
            // If there's no detected skew or rotation values, we can early return without a forced render.
            let hasDistortingTransform = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */
            const { latestValues } = visualElement;
            if (latestValues.z ||
                latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ ||
                latestValues.skewX ||
                latestValues.skewY) {
                hasDistortingTransform = true;
            }
            // If there's no distorting values, we don't need to do any more.
            if (!hasDistortingTransform)
                return;
            const resetValues = {};
            if (latestValues.z) {
                resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
            }
            // Check the skew and rotate value of all axes and reset to 0
            for (let i = 0; i < transformAxes.length; i++) {
                resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
                resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
            }
            // Force a render of this element to apply the transform with all skews and rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for (const key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
                if (this.animationValues) {
                    this.animationValues[key] = resetValues[key];
                }
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        getProjectionStyles(styleProp) {
            var _a, _b;
            if (!this.instance || this.isSVG)
                return undefined;
            if (!this.isVisible) {
                return hiddenVisibility;
            }
            const styles = {
                visibility: "",
            };
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_21__.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                const emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity =
                        this.latestValues.opacity !== undefined
                            ? this.latestValues.opacity
                            : 1;
                    emptyStyles.pointerEvents =
                        (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_21__.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_13__.hasTransform)(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = (0,_styles_transform_mjs__WEBPACK_IMPORTED_MODULE_22__.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            const { x, y } = this.projectionDelta;
            styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? valuesToRender.opacity !== undefined
                            ? valuesToRender.opacity
                            : ""
                        : valuesToRender.opacityExit !== undefined
                            ? valuesToRender.opacityExit
                            : 0;
            }
            /**
             * Apply scale correction
             */
            for (const key in _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_23__.scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                const { correct, applyTo } = _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_23__.scaleCorrectors[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */
                const corrected = styles.transform === "none"
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for (let i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    styles[key] = corrected;
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_21__.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || ""
                        : "none";
            }
            return styles;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node) => { var _a; return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop(); });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_24__.eachAxis)((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcLength)(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_24__.eachAxis)((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcLength)(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max =
                        node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createDelta)();
        (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcBoxDelta)(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createDelta)();
        if (isShared) {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcBoxDelta)(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        }
        else {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcBoxDelta)(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.isDeltaZero)(layoutDelta);
        let hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcRelativePosition)(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_12__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.calcRelativePosition)(relativeLayout, layout, parentLayout.layoutBox);
                    if (!(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.boxEqualsRounded)(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeTargetChanged,
        });
    }
    else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */
    if (isDebug) {
        metrics.totalNodes++;
    }
    if (!node.parent)
        return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty ||
        node.parent.isProjectionDirty ||
        node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty =
        node.isSharedProjectionDirty =
            node.isTransformDirty =
                false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_25__.mixNumber)(delta.translate, 0, p);
    output.scale = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_25__.mixNumber)(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_25__.mixNumber)(from.min, to.min, p);
    output.max = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_25__.mixNumber)(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
const userAgentContains = (string) => typeof navigator !== "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/")
    ? Math.round
    : _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_26__.noop;
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return (animationType === "position" ||
        (animationType === "preserve-aspect" &&
            !(0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_17__.isNear)((0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.aspectRatio)(snapshot), (0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_7__.aspectRatio)(layout), 0.2)));
}
function checkNodeWasScrollRoot(node) {
    var _a;
    return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/state.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/state.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalProjectionState: () => (/* binding */ globalProjectionState)
/* harmony export */ });
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeStack: () => (/* binding */ NodeStack)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


class NodeStack {
    constructor() {
        this.members = [];
    }
    add(node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.members, node);
        node.scheduleRender();
    }
    remove(node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    }
    relegate(node) {
        const indexOfNode = this.members.findIndex((member) => node === member);
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        let prevLead;
        for (let i = indexOfNode; i >= 0; i--) {
            const member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
            }
            if (node.root && node.root.isUpdating) {
                node.isLayoutDirty = true;
            }
            const { crossfade } = node.options;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    }
    exitAnimationComplete() {
        this.members.forEach((node) => {
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete();
            if (resumingFrom) {
                resumingFrom.options.onExitComplete &&
                    resumingFrom.options.onExitComplete();
            }
        });
    }
    scheduleRender() {
        this.members.forEach((node) => {
            node.instance && node.scheduleRender(false);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   correctBorderRadius: () => (/* binding */ correctBorderRadius),
/* harmony export */   pixelsToPercent: () => (/* binding */ pixelsToPercent)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");


function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
const correctBorderRadius = {
    correct: (latest, node) => {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (_value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   correctBoxShadow: () => (/* binding */ correctBoxShadow)
/* harmony export */ });
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");



const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
        const original = latest;
        const shadow = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        const template = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        const averageScale = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        return template(shadow);
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScaleCorrector: () => (/* binding */ addScaleCorrector),
/* harmony export */   scaleCorrectors: () => (/* binding */ scaleCorrectors)
/* harmony export */ });
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildProjectionTransform: () => (/* binding */ buildProjectionTransform)
/* harmony export */ });
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
    if (xTranslate || yTranslate || zTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
        if (transformPerspective)
            transform = `perspective(${transformPerspective}px) ${transform}`;
        if (rotate)
            transform += `rotate(${rotate}deg) `;
        if (rotateX)
            transform += `rotateX(${rotateX}deg) `;
        if (rotateY)
            transform += `rotateY(${rotateY}deg) `;
        if (skewX)
            transform += `skewX(${skewX}deg) `;
        if (skewY)
            transform += `skewY(${skewY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eachAxis: () => (/* binding */ eachAxis)
/* harmony export */ });
function eachAxis(callback) {
    return [callback("x"), callback("y")];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   has2DTranslate: () => (/* binding */ has2DTranslate),
/* harmony export */   hasScale: () => (/* binding */ hasScale),
/* harmony export */   hasTransform: () => (/* binding */ hasTransform)
/* harmony export */ });
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY ||
        values.skewX ||
        values.skewY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   measurePageBox: () => (/* binding */ measurePageBox),
/* harmony export */   measureViewportBox: () => (/* binding */ measureViewportBox)
/* harmony export */ });
/* harmony import */ var _geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");



function measureViewportBox(instance, transformPoint) {
    return (0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToBox)((0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.x, scroll.offset.x);
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/VisualElement.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/VisualElement.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualElement: () => (/* binding */ VisualElement)
/* harmony export */ });
/* harmony import */ var _utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/reduced-motion/index.mjs */ "./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs");
/* harmony import */ var _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/reduced-motion/state.mjs */ "./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-controlling-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");
/* harmony import */ var _utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs");
/* harmony import */ var _utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/resolve-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../motion/features/definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var _store_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.mjs */ "./node_modules/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/KeyframesResolver.mjs */ "./node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/is-numerical-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/is-zero-value-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs");
/* harmony import */ var _dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dom/value-types/find.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameloop/sync-time.mjs */ "./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");






















const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        this.KeyframeResolver = _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__.KeyframeResolver;
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = () => {
            const now = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__.time.now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.render(this.render, false, true);
            }
        };
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isControllingVariants)(props);
        this.isVariantNode = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantNode)(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
            }
        }
    }
    mount(instance) {
        this.current = instance;
        _store_mjs__WEBPACK_IMPORTED_MODULE_5__.visualElementStore.set(instance, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!_utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__.hasReducedMotionListener.current) {
            (0,_utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__.initPrefersReducedMotion)();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__.prefersReducedMotion.current;
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_8__.warnOnce)(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        }
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        _store_mjs__WEBPACK_IMPORTED_MODULE_5__.visualElementStore.delete(this.current);
        this.projection && this.projection.unmount();
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.notifyUpdate);
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) {
            this.valueSubscriptions.get(key)();
        }
        const valueIsTransform = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_9__.transformProps.has(key);
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate && _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        let removeSyncCheck;
        if (window.MotionCheckAppearSync) {
            removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        }
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
            if (removeSyncCheck)
                removeSyncCheck();
            if (value.owner)
                value.stop();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for (key in _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__.featureDefinitions) {
            const featureDefinition = _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__.featureDefinitions[key];
            if (!featureDefinition)
                continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */
            if (!this.features[key] &&
                FeatureConstructor &&
                isEnabled(this.props)) {
                this.features[key] = new FeatureConstructor(this);
            }
            /**
             * If we have a feature, mount or update it.
             */
            if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) {
                    feature.update();
                }
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_11__.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = ("on" + key);
            const listener = props[listenerName];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = (0,_utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_12__.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue)
                this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_13__.motionValue)(defaultValue === null ? undefined : defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
        var _a;
        let value = this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" &&
                ((0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_14__.isNumericalString)(value) || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_15__.isZeroValueString)(value))) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!(0,_dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_16__.findValueType)(value) && _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_17__.complex.test(target)) {
                value = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_18__.getAnimatableNone)(key, target);
            }
            this.setBaseTarget(key, (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value) ? value.get() : value);
        }
        return (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = (0,_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_19__.resolveVariantFromProps)(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
            if (variant) {
                valueFromInitial = variant[key];
            }
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_20__.SubscriptionManager();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/components/create-factory.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/components/create-factory.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMotionComponentFactory: () => (/* binding */ createMotionComponentFactory)
/* harmony export */ });
/* harmony import */ var _motion_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../motion/index.mjs */ "./node_modules/framer-motion/dist/es/motion/index.mjs");
/* harmony import */ var _dom_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs");
/* harmony import */ var _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs");
/* harmony import */ var _dom_use_render_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/use-render.mjs */ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs");






function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
    return function createMotionComponent(Component, { forwardMotionProps } = { forwardMotionProps: false }) {
        const baseConfig = (0,_dom_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
            ? _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__.svgMotionConfig
            : _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlMotionConfig;
        const config = {
            ...baseConfig,
            preloadedFeatures,
            useRender: (0,_dom_use_render_mjs__WEBPACK_IMPORTED_MODULE_3__.createUseRender)(forwardMotionProps),
            createVisualElement,
            Component,
        };
        return (0,_motion_index_mjs__WEBPACK_IMPORTED_MODULE_4__.createRendererMotionComponent)(config);
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/components/create-proxy.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/components/create-proxy.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOMMotionComponentProxy: () => (/* binding */ createDOMMotionComponentProxy)
/* harmony export */ });
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");


function createDOMMotionComponentProxy(componentFactory) {
    if (typeof Proxy === "undefined") {
        return componentFactory;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    const componentCache = new Map();
    const deprecatedFactoryFunction = (...args) => {
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_0__.warnOnce)(false, "motion() is deprecated. Use motion.create() instead.");
        }
        return componentFactory(...args);
    };
    return new Proxy(deprecatedFactoryFunction, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (_target, key) => {
            if (key === "create")
                return componentFactory;
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, componentFactory(key));
            }
            return componentCache.get(key);
        },
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/components/motion/create.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/components/motion/create.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMotionComponent: () => (/* binding */ createMotionComponent)
/* harmony export */ });
/* harmony import */ var _motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/features/animations.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs");
/* harmony import */ var _motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../motion/features/drag.mjs */ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs");
/* harmony import */ var _motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../motion/features/gestures.mjs */ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs");
/* harmony import */ var _motion_features_layout_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../motion/features/layout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout.mjs");
/* harmony import */ var _create_factory_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-factory.mjs */ "./node_modules/framer-motion/dist/es/render/components/create-factory.mjs");
/* harmony import */ var _dom_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dom/create-visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs");







const createMotionComponent = /*@__PURE__*/ (0,_create_factory_mjs__WEBPACK_IMPORTED_MODULE_0__.createMotionComponentFactory)({
    ..._motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_1__.animations,
    ..._motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_2__.gestureAnimations,
    ..._motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_3__.drag,
    ..._motion_features_layout_mjs__WEBPACK_IMPORTED_MODULE_4__.layout,
}, _dom_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__.createDomVisualElement);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   motion: () => (/* binding */ motion)
/* harmony export */ });
/* harmony import */ var _create_proxy_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-proxy.mjs */ "./node_modules/framer-motion/dist/es/render/components/create-proxy.mjs");
/* harmony import */ var _create_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.mjs */ "./node_modules/framer-motion/dist/es/render/components/motion/create.mjs");



const motion = /*@__PURE__*/ (0,_create_proxy_mjs__WEBPACK_IMPORTED_MODULE_0__.createDOMMotionComponentProxy)(_create_mjs__WEBPACK_IMPORTED_MODULE_1__.createMotionComponent);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMKeyframesResolver: () => (/* binding */ DOMKeyframesResolver)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_none_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-none.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-none.mjs");
/* harmony import */ var _utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/css-variables-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");
/* harmony import */ var _utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/unit-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");
/* harmony import */ var _value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value-types/dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/KeyframesResolver.mjs */ "./node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _html_utils_make_none_animatable_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html/utils/make-none-animatable.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs");








class DOMKeyframesResolver extends _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__.KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current)
            return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0,_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableToken)(keyframe)) {
                    const resolved = (0,_utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.getVariableValue)(keyframe, element.current);
                    if (resolved !== undefined) {
                        unresolvedKeyframes[i] = resolved;
                    }
                    if (i === unresolvedKeyframes.length - 1) {
                        this.finalKeyframe = keyframe;
                    }
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */
        this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */
        if (!_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
            return;
        }
        const [origin, target] = unresolvedKeyframes;
        const originType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__.findDimensionValueType)(origin);
        const targetType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__.findDimensionValueType)(target);
        /**
         * Either we don't recognise these value types or we can animate between them.
         */
        if (originType === targetType)
            return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */
        if ((0,_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.isNumOrPxType)(originType) && (0,_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.isNumOrPxType)(targetType)) {
            for (let i = 0; i < unresolvedKeyframes.length; i++) {
                const value = unresolvedKeyframes[i];
                if (typeof value === "string") {
                    unresolvedKeyframes[i] = parseFloat(value);
                }
            }
        }
        else {
            /**
             * Else, the only way to resolve this is by measuring the element.
             */
            this.needsMeasurement = true;
        }
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if ((0,_animation_utils_is_none_mjs__WEBPACK_IMPORTED_MODULE_5__.isNone)(unresolvedKeyframes[i])) {
                noneKeyframeIndexes.push(i);
            }
        }
        if (noneKeyframeIndexes.length) {
            (0,_html_utils_make_none_animatable_mjs__WEBPACK_IMPORTED_MODULE_6__.makeNoneKeyframesAnimatable)(unresolvedKeyframes, noneKeyframeIndexes, name);
        }
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current)
            return;
        if (name === "height") {
            this.suspendedScrollY = window.pageYOffset;
        }
        this.measuredOrigin = _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) {
            element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
        }
    }
    measureEndState() {
        var _a;
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current)
            return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = finalKeyframe;
        }
        // If we removed transform values, reapply them before the next render
        if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
            this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
                element
                    .getValue(unsetTransformName)
                    .set(unsetTransformValue);
            });
        }
        this.resolveNoneKeyframes();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMVisualElement: () => (/* binding */ DOMVisualElement)
/* harmony export */ });
/* harmony import */ var _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/VisualElement.mjs");
/* harmony import */ var _DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMKeyframesResolver.mjs */ "./node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs");



class DOMVisualElement extends _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.VisualElement {
    constructor() {
        super(...arguments);
        this.KeyframeResolver = _DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__.DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style
            ? props.style[key]
            : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDomVisualElement: () => (/* binding */ createDomVisualElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/HTMLVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs");
/* harmony import */ var _svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/SVGVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");





const createDomVisualElement = (Component, options) => {
    return (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__.isSVGComponent)(Component)
        ? new _svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__.SVGVisualElement(options)
        : new _html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_3__.HTMLVisualElement(options, {
            allowProjection: Component !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        });
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeElement: () => (/* binding */ resizeElement)
/* harmony export */ });
/* harmony import */ var _utils_resolve_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resolve-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs");


const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return { width: inlineSize, height: blockSize };
    }
    else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    }
    else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight,
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize, }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
        handler({
            target,
            contentSize: contentRect,
            get size() {
                return getElementSize(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = (0,_utils_resolve_element_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveElements)(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeWindow: () => (/* binding */ resizeWindow)
/* harmony export */ });
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const size = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const info = {
            target: window,
            size,
            contentSize: size,
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resize: () => (/* binding */ resize)
/* harmony export */ });
/* harmony import */ var _handle_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs");
/* harmony import */ var _handle_window_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle-window.mjs */ "./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs");



function resize(a, b) {
    return typeof a === "function" ? (0,_handle_window_mjs__WEBPACK_IMPORTED_MODULE_0__.resizeWindow)(a) : (0,_handle_element_mjs__WEBPACK_IMPORTED_MODULE_1__.resizeElement)(a, b);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
/* harmony import */ var _track_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs");
/* harmony import */ var _observe_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observe.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs");
/* harmony import */ var _supports_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supports.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs");
/* harmony import */ var _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");





function scrollTimelineFallback({ source, container, axis = "y", }) {
    // Support legacy source argument. Deprecate later.
    if (source)
        container = source;
    // ScrollTimeline records progress as a percentage CSSUnitValue
    const currentTime = { value: 0 };
    const cancel = (0,_track_mjs__WEBPACK_IMPORTED_MODULE_0__.scrollInfo)((info) => {
        currentTime.value = info[axis].progress * 100;
    }, { container, axis });
    return { currentTime, cancel };
}
const timelineCache = new Map();
function getTimeline({ source, container = document.documentElement, axis = "y", } = {}) {
    // Support legacy source argument. Deprecate later.
    if (source)
        container = source;
    if (!timelineCache.has(container)) {
        timelineCache.set(container, {});
    }
    const elementCache = timelineCache.get(container);
    if (!elementCache[axis]) {
        elementCache[axis] = (0,_supports_mjs__WEBPACK_IMPORTED_MODULE_1__.supportsScrollTimeline)()
            ? new ScrollTimeline({ source: container, axis })
            : scrollTimelineFallback({ source: container, axis });
    }
    return elementCache[axis];
}
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */
function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
/**
 * Currently, we only support element tracking with `scrollInfo`, though in
 * the future we can also offer ViewTimeline support.
 */
function needsElementTracking(options) {
    return options && (options.target || options.offset);
}
function scrollFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll) || needsElementTracking(options)) {
        return (0,_track_mjs__WEBPACK_IMPORTED_MODULE_0__.scrollInfo)((info) => {
            onScroll(info[options.axis].progress, info);
        }, options);
    }
    else {
        return (0,_observe_mjs__WEBPACK_IMPORTED_MODULE_2__.observeTimeline)(onScroll, getTimeline(options));
    }
}
function scrollAnimation(animation, options) {
    animation.flatten();
    if (needsElementTracking(options)) {
        animation.pause();
        return (0,_track_mjs__WEBPACK_IMPORTED_MODULE_0__.scrollInfo)((info) => {
            animation.time = animation.duration * info[options.axis].progress;
        }, options);
    }
    else {
        const timeline = getTimeline(options);
        if (animation.attachTimeline) {
            return animation.attachTimeline(timeline, (valueAnimation) => {
                valueAnimation.pause();
                return (0,_observe_mjs__WEBPACK_IMPORTED_MODULE_2__.observeTimeline)((progress) => {
                    valueAnimation.time = valueAnimation.duration * progress;
                }, timeline);
            });
        }
        else {
            return _utils_noop_mjs__WEBPACK_IMPORTED_MODULE_3__.noop;
        }
    }
}
function scroll(onScroll, { axis = "y", ...options } = {}) {
    const optionsWithDefaults = { axis, ...options };
    return typeof onScroll === "function"
        ? scrollFunction(onScroll, optionsWithDefaults)
        : scrollAnimation(onScroll, optionsWithDefaults);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScrollInfo: () => (/* binding */ createScrollInfo),
/* harmony export */   updateScrollInfo: () => (/* binding */ updateScrollInfo)
/* harmony export */ });
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/velocity-per-second.mjs */ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs");



/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
});
const createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo(),
});
const keys = {
    x: {
        length: "Width",
        position: "Left",
    },
    y: {
        length: "Height",
        position: "Top",
    },
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element[`scroll${position}`];
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity =
        elapsed > maxElapsed
            ? 0
            : (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_1__.velocityPerSecond)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeTimeline: () => (/* binding */ observeTimeline)
/* harmony export */ });
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");


function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = () => {
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(onFrame, true);
    return () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(onFrame);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namedEdges: () => (/* binding */ namedEdges),
/* harmony export */   resolveEdge: () => (/* binding */ resolveEdge)
/* harmony export */ });
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1,
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */
    if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */
    if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        }
        else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        }
        else if (edge.endsWith("vw")) {
            delta = (asNumber / 100) * document.documentElement.clientWidth;
        }
        else if (edge.endsWith("vh")) {
            delta = (asNumber / 100) * document.documentElement.clientHeight;
        }
        else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */
    if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveOffsets: () => (/* binding */ resolveOffsets)
/* harmony export */ });
/* harmony import */ var _inset_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inset.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs");
/* harmony import */ var _presets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presets.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs");
/* harmony import */ var _offset_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/interpolate.mjs */ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/offsets/default.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/default.mjs");






const point = { x: 0, y: 0 };
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg"
        ? target.getBBox()
        : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = _presets_mjs__WEBPACK_IMPORTED_MODULE_0__.ScrollOffset.All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0,_inset_mjs__WEBPACK_IMPORTED_MODULE_1__.calcInset)(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */
    const targetSize = target === container
        ? { width: container.scrollWidth, height: container.scrollHeight }
        : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight,
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */
    info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
        const offset = (0,_offset_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveOffset)(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */
    if (hasChanged) {
        info[axis].interpolate = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__.interpolate)(info[axis].offset, (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultOffset)(offsetDefinition));
        info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcInset: () => (/* binding */ calcInset)
/* harmony export */ });
function calcInset(element, container) {
    const inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        }
        else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */
            const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        }
        else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while (!svg) {
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        }
        else {
            break;
        }
    }
    return inset;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveOffset: () => (/* binding */ resolveOffset)
/* harmony export */ });
/* harmony import */ var _edge_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edge.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs");


const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */
        offsetDefinition = [offset, offset];
    }
    else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        }
        else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */
            offsetDefinition = [offset, _edge_mjs__WEBPACK_IMPORTED_MODULE_0__.namedEdges[offset] ? offset : `0`];
        }
    }
    targetPoint = (0,_edge_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveEdge)(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0,_edge_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveEdge)(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollOffset: () => (/* binding */ ScrollOffset)
/* harmony export */ });
const ScrollOffset = {
    Enter: [
        [0, 1],
        [1, 1],
    ],
    Exit: [
        [0, 0],
        [1, 0],
    ],
    Any: [
        [1, 0],
        [0, 1],
    ],
    All: [
        [0, 0],
        [1, 1],
    ],
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOnScrollHandler: () => (/* binding */ createOnScrollHandler)
/* harmony export */ });
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _info_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs");
/* harmony import */ var _offsets_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offsets/index.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs");




function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while (node && node !== container) {
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength =
        target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength =
        target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */
    if (true) {
        if (container && target && target !== container) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_0__.warnOnce)(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
        }
    }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: () => measure(element, options.target, info),
        update: (time) => {
            (0,_info_mjs__WEBPACK_IMPORTED_MODULE_1__.updateScrollInfo)(element, info, time);
            if (options.offset || options.target) {
                (0,_offsets_index_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveOffsets)(element, info, options);
            }
        },
        notify: () => onScroll(info),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsScrollTimeline: () => (/* binding */ supportsScrollTimeline)
/* harmony export */ });
/* harmony import */ var _utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/memo.mjs */ "./node_modules/framer-motion/dist/es/utils/memo.mjs");


const supportsScrollTimeline = (0,_utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(() => window.ScrollTimeline !== undefined);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollInfo: () => (/* binding */ scrollInfo)
/* harmony export */ });
/* harmony import */ var _resize_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resize/index.mjs */ "./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs");
/* harmony import */ var _info_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs");
/* harmony import */ var _on_scroll_handler_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-scroll-handler.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");





const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element) => element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */
    if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */
    const info = (0,_info_mjs__WEBPACK_IMPORTED_MODULE_0__.createScrollInfo)();
    const containerHandler = (0,_on_scroll_handler_mjs__WEBPACK_IMPORTED_MODULE_1__.createOnScrollHandler)(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */
    if (!scrollListeners.has(container)) {
        const measureAll = () => {
            for (const handler of containerHandlers)
                handler.measure();
        };
        const updateAll = () => {
            for (const handler of containerHandlers) {
                handler.update(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frameData.timestamp);
            }
        };
        const notifyAll = () => {
            for (const handler of containerHandlers)
                handler.notify();
        };
        const listener = () => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(measureAll, false, true);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(updateAll, false, true);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(notifyAll, false, true);
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, { passive: true });
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0,_resize_index_mjs__WEBPACK_IMPORTED_MODULE_3__.resize)(container, listener));
        }
        target.addEventListener("scroll", listener, { passive: true });
    }
    const listener = scrollListeners.get(container);
    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(listener, false, true);
    return () => {
        var _a;
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(listener);
        /**
         * Check if we even have any handlers for this container.
         */
        const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers)
            return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size)
            return;
        /**
         * If no more handlers, remove the scroll listener too.
         */
        const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", scrollListener);
        }
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUseRender: () => (/* binding */ createUseRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/filter-props.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");







function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, ref, { latestValues }, isStatic) => {
        const useVisualProps = (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__.isSVGComponent)(Component)
            ? _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__.useSVGProps
            : _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useHTMLProps;
        const visualProps = useVisualProps(props, latestValues, isStatic, Component);
        const filteredProps = (0,_utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__.filterProps)(props, typeof Component === "string", forwardMotionProps);
        const elementProps = Component !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment
            ? { ...filteredProps, ...visualProps, ref }
            : {};
        /**
         * If component has been handed a motion value as its child,
         * memoise its initial value and render that. Subsequent updates
         * will be handled by the onChange handler
         */
        const { children } = props;
        const renderedChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_5__.isMotionValue)(children) ? children.get() : children), [children]);
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
            ...elementProps,
            children: renderedChildren,
        });
    };
    return useRender;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToDash: () => (/* binding */ camelToDash)
/* harmony export */ });
/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVariableValue: () => (/* binding */ getVariableValue),
/* harmony export */   parseCSSVariable: () => (/* binding */ parseCSSVariable)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/is-numerical-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");




/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = 
// eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0,_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariableToken)(fallback)
        ? getVariableValue(fallback, element, depth + 1)
        : fallback;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterProps: () => (/* binding */ filterProps),
/* harmony export */   loadExternalIsValidProp: () => (/* binding */ loadExternalIsValidProp)
/* harmony export */ });
/* harmony import */ var _motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs");


let shouldForward = (key) => !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key);
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (shouldForward(key) ||
            (forwardMotionProps === true && (0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            (!isDom && !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] &&
                key.startsWith("onDrag"))) {
            filteredProps[key] =
                props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCSSVariableName: () => (/* binding */ isCSSVariableName),
/* harmony export */   isCSSVariableToken: () => (/* binding */ isCSSVariableToken)
/* harmony export */ });
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = 
/*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = 
/*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
        return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGComponent: () => (/* binding */ isSVGComponent)
/* harmony export */ });
/* harmony import */ var _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.mjs */ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs");


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/u.test(Component)) {
        return true;
    }
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement)
/* harmony export */ });
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveElements: () => (/* binding */ resolveElements)
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");


function resolveElements(elements, scope, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        let root = document;
        if (scope) {
            (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(Boolean(scope.current), "Scope provided, but no element detected.");
            root = scope.current;
        }
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = root.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = root.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumOrPxType: () => (/* binding */ isNumOrPxType),
/* harmony export */   positionalKeys: () => (/* binding */ positionalKeys),
/* harmony export */   positionalValues: () => (/* binding */ positionalValues),
/* harmony export */   removeNonTranslationalTransform: () => (/* binding */ removeNonTranslationalTransform)
/* harmony export */ });
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");




const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
]);
const isNumOrPxType = (v) => v === _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number || v === _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/u);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnimatableNone: () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");




function getAnimatableNone(key, value) {
    let defaultValueType = (0,_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValueTypes: () => (/* binding */ defaultValueTypes),
/* harmony export */   getDefaultValueType: () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");




/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ..._number_mjs__WEBPACK_IMPORTED_MODULE_0__.numberValueTypes,
    // Color props
    color: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    backgroundColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    outlineColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    fill: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    stroke: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    // Border props
    borderColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderTopColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderRightColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderBottomColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderLeftColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    filter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
    WebkitFilter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimensionValueTypes: () => (/* binding */ dimensionValueTypes),
/* harmony export */   findDimensionValueType: () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");
/* harmony import */ var _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs");





/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [_value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.degrees, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vw, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findValueType: () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");





/**
 * A list of all ValueTypes
 */
const valueTypes = [..._dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__.dimensionValueTypes, _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color, _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueAsType: () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browserNumberValueTypes: () => (/* binding */ browserNumberValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");


const browserNumberValueTypes = {
    // Border props
    borderWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    height: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    top: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    right: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    left: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    backgroundPositionX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    backgroundPositionY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberValueTypes: () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _number_browser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-browser.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs");
/* harmony import */ var _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs");






const numberValueTypes = {
    ..._number_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.browserNumberValueTypes,
    ..._transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transformValueTypes,
    zIndex: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
    size: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_3__.px,
    // SVG
    fillOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__.alpha,
    strokeOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__.alpha,
    numOctaves: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testValueType: () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformValueTypes: () => (/* binding */ transformValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");



const transformValueTypes = {
    rotate: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    x: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    y: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    z: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auto: () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   int: () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");


const int = {
    ..._value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number,
    transform: Math.round,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLVisualElement: () => (/* binding */ HTMLVisualElement),
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");










function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "html";
        this.renderInstance = _utils_render_mjs__WEBPACK_IMPORTED_MODULE_1__.renderHTML;
    }
    readValueFromInstance(instance, key) {
        if (_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_4__.isCSSVariableName)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_5__.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.buildHTMLStyles)(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_8__.isMotionValue)(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current)
                    this.current.textContent = `${latest}`;
            });
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/config-motion.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlMotionConfig: () => (/* binding */ htmlMotionConfig)
/* harmony export */ });
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");




const htmlMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createHtmlRenderState,
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/use-props.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyRawValuesOnly: () => (/* binding */ copyRawValuesOnly),
/* harmony export */   useHTMLProps: () => (/* binding */ useHTMLProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");






function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(source[key]) && !(0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.isForcedMotionValue)(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__.createHtmlRenderState)();
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__.buildHTMLStyles)(state, visualState, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHTMLStyles: () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");






function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        if (_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        }
        else if ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        }
        else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_3__.numberValueTypes[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] =
                    valueAsType;
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransform)(latestValues, state.transform, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTransform: () => (/* binding */ buildTransform)
/* harmony export */ });
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");




const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = _transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = _transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder[i];
        const value = latestValues[key];
        if (value === undefined)
            continue;
        let valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        }
        else {
            valueIsDefault = parseFloat(value) === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_1__.getValueAsType)(value, _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_2__.numberValueTypes[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) {
                transform[key] = valueAsType;
            }
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlRenderState: () => (/* binding */ createHtmlRenderState)
/* harmony export */ });
const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeNoneKeyframesAnimatable: () => (/* binding */ makeNoneKeyframesAnimatable)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");



/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */
const invalidTemplates = new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" &&
            !invalidTemplates.has(keyframe) &&
            (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.analyseComplexValue)(keyframe).values.length) {
            animatableTemplate = unresolvedKeyframes[i];
        }
        i++;
    }
    if (animatableTemplate && name) {
        for (const noneIndex of noneKeyframeIndexes) {
            unresolvedKeyframes[noneIndex] = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_1__.getAnimatableNone)(name, animatableTemplate);
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHTML: () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) ||
            (prevProps.style &&
                (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevProps.style[key])) ||
            (0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props) ||
            ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== undefined) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformPropOrder: () => (/* binding */ transformPropOrder),
/* harmony export */   transformProps: () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/store.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/store.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visualElementStore: () => (/* binding */ visualElementStore)
/* harmony export */ });
const visualElementStore = new WeakMap();




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGVisualElement: () => (/* binding */ SVGVisualElement)
/* harmony export */ });
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");











class SVGVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__.createBox;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !_utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_5__.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__.buildSVGAttrs)(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svgMotionConfig: () => (/* binding */ svgMotionConfig)
/* harmony export */ });
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");








const svgMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createSvgRenderState,
        onMount: (props, instance, { renderState, latestValues }) => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.read(() => {
                try {
                    renderState.dimensions =
                        typeof instance.getBBox ===
                            "function"
                            ? instance.getBBox()
                            : instance.getBoundingClientRect();
                }
                catch (e) {
                    // Most likely trying to measure an unrendered element under Firefox
                    renderState.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                    };
                }
            });
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.render(() => {
                (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__.buildSVGAttrs)(renderState, latestValues, (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_5__.isSVGTag)(instance.tagName), props.transformTemplate);
                (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_6__.renderSVG)(instance, renderState);
            });
        },
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lowercaseSVGElements: () => (/* binding */ lowercaseSVGElements)
/* harmony export */ });
/**
 * We keep these listed separately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSVGProps: () => (/* binding */ useSVGProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");






function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createSvgRenderState)();
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGAttrs)(state, visualState, (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_3__.isSVGTag)(Component), props.transformTemplate);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        (0,_html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGAttrs: () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var _html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-origin.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs");
/* harmony import */ var _path_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs");




/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate) {
    (0,_html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__.buildHTMLStyles)(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        (0,_path_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCaseAttributes: () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSvgRenderState: () => (/* binding */ createSvgRenderState)
/* harmony export */ });
/* harmony import */ var _html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");


const createSvgRenderState = () => ({
    ...(0,_html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_0__.createHtmlRenderState)(),
    attrs: {},
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGTag: () => (/* binding */ isSVGTag)
/* harmony export */ });
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGPath: () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");


const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(-offset);
    // Build the dash array
    const pathLength = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(length);
    const pathSpacing = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSVG: () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");




function renderSVG(element, renderState, _styleProp, projection) {
    (0,_html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");




function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = (0,_html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    for (const key in props) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key]) ||
            (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(prevProps[key])) {
            const targetKey = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcSVGTransformOrigin: () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyframeResolver: () => (/* binding */ KeyframeResolver),
/* harmony export */   flushKeyframeResolvers: () => (/* binding */ flushKeyframeResolvers)
/* harmony export */ });
/* harmony import */ var _dom_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/utils/unit-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");



const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */
        elementsToMeasure.forEach((element) => {
            const removedTransforms = (0,_dom_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.removeNonTranslationalTransform)(element);
            if (!removedTransforms.length)
                return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element) => {
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) {
                restore.forEach(([key, value]) => {
                    var _a;
                    (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
                });
            }
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver) => {
            if (resolver.suspendedScrollY !== undefined) {
                window.scrollTo(0, resolver.suspendedScrollY);
            }
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete());
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver) => {
        resolver.readKeyframes();
        if (resolver.needsMeasurement) {
            anyNeedsMeasurement = true;
        }
    });
}
function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
        /**
         * Track whether this resolver has completed. Once complete, it never
         * needs to attempt keyframe resolution again.
         */
        this.isComplete = false;
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */
        this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */
        this.needsMeasurement = false;
        /**
         * Track whether this resolver is currently scheduled to resolve
         * to allow it to be cancelled and resumed externally.
         */
        this.isScheduled = false;
        this.unresolvedKeyframes = [...unresolvedKeyframes];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.isScheduled = true;
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.read(readAllKeyframes);
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.resolveKeyframes(measureAllKeyframes);
            }
        }
        else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        /**
         * If a keyframe is null, we hydrate it either by reading it from
         * the instance, or propagating from previous keyframes.
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if (unresolvedKeyframes[i] === null) {
                /**
                 * If the first keyframe is null, we need to find its value by sampling the element
                 */
                if (i === 0) {
                    const currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
                    const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                    if (currentValue !== undefined) {
                        unresolvedKeyframes[0] = currentValue;
                    }
                    else if (element && name) {
                        const valueAsRead = element.readValue(name, finalKeyframe);
                        if (valueAsRead !== undefined && valueAsRead !== null) {
                            unresolvedKeyframes[0] = valueAsRead;
                        }
                    }
                    if (unresolvedKeyframes[0] === undefined) {
                        unresolvedKeyframes[0] = finalKeyframe;
                    }
                    if (motionValue && currentValue === undefined) {
                        motionValue.set(unresolvedKeyframes[0]);
                    }
                }
                else {
                    unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
                }
            }
        }
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete() {
        this.isComplete = true;
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
        toResolve.delete(this);
    }
    cancel() {
        if (!this.isComplete) {
            this.isScheduled = false;
            toResolve.delete(this);
        }
    }
    resume() {
        if (!this.isComplete)
            this.scheduleResolve();
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkVariantsDidChange: () => (/* binding */ checkVariantsDidChange),
/* harmony export */   createAnimationState: () => (/* binding */ createAnimationState)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");
/* harmony import */ var _utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/shallow-compare.mjs */ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs");
/* harmony import */ var _is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");
/* harmony import */ var _variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant-props.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs");
/* harmony import */ var _animation_interfaces_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/interfaces/visual-element.mjs */ "./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs");
/* harmony import */ var _get_variant_context_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-variant-context.mjs */ "./node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs");









const reversePriorityOrder = [..._variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__.variantPriorityOrder].reverse();
const numAnimationTypes = _variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__.variantPriorityOrder.length;
function animateList(visualElement) {
    return (animations) => Promise.all(animations.map(({ animation, options }) => (0,_animation_interfaces_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__.animateVisualElement)(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    let state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (type) => (acc, definition) => {
        var _a;
        const resolved = (0,_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveVariant)(visualElement, definition, type === "exit"
            ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom
            : undefined);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(changedActiveType) {
        const { props } = visualElement;
        const context = (0,_get_variant_context_mjs__WEBPACK_IMPORTED_MODULE_3__.getVariantContext)(visualElement.parent) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined
                ? props[type]
                : context[type];
            const propIsVariant = (0,_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_4__.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] &&
                prop !== props[type] &&
                propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                (0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_5__.isAnimationControls)(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            let handledRemovedValues = false;
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
                const motionValue = visualElement.getValue(key);
                if (motionValue)
                    motionValue.liveStyle = false;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                let valueHasChanged = false;
                if ((0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_6__.isKeyframesTarget)(next) && (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_6__.isKeyframesTarget)(prev)) {
                    valueHasChanged = !(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_7__.shallowCompare)(next, prev);
                }
                else {
                    valueHasChanged = next !== prev;
                }
                if (valueHasChanged) {
                    if (next !== undefined && next !== null) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to skip this animation
             * unless the inherited variants haven't changed on this render.
             */
            const willAnimateViaParent = isInherited && variantDidChange;
            const needsAnimating = !willAnimateViaParent || handledRemovedValues;
            if (shouldAnimateType && needsAnimating) {
                animations.push(...definitionList.map((animation) => ({
                    animation: animation,
                    options: { type },
                })));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                const motionValue = visualElement.getValue(key);
                if (motionValue)
                    motionValue.liveStyle = true;
                // @ts-expect-error - @mattgperry to figure if we should do something here
                fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            (props.initial === false || props.initial === props.animate) &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        const animations = animateChanges(type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
        reset: () => {
            state = createState();
            isInitialRender = true;
        },
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_7__.shallowCompare)(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState(),
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareByDepth: () => (/* binding */ compareByDepth)
/* harmony export */ });
const compareByDepth = (a, b) => a.depth - b.depth;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlatTree: () => (/* binding */ FlatTree)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");
/* harmony import */ var _compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.mjs */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs");



class FlatTree {
    constructor() {
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(_compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVariantContext: () => (/* binding */ getVariantContext)
/* harmony export */ });
/* harmony import */ var _is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant-props.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs");



const numVariantProps = _variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__.variantProps.length;
function getVariantContext(visualElement) {
    if (!visualElement)
        return undefined;
    if (!visualElement.isControllingVariants) {
        const context = visualElement.parent
            ? getVariantContext(visualElement.parent) || {}
            : {};
        if (visualElement.props.initial !== undefined) {
            context.initial = visualElement.props.initial;
        }
        return context;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
        const name = _variant_props_mjs__WEBPACK_IMPORTED_MODULE_0__.variantProps[i];
        const prop = visualElement.props[name];
        if ((0,_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_1__.isVariantLabel)(prop) || prop === false) {
            context[name] = prop;
        }
    }
    return context;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isControllingVariants: () => (/* binding */ isControllingVariants),
/* harmony export */   isVariantNode: () => (/* binding */ isVariantNode)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-variant-label.mjs */ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-props.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs");




function isControllingVariants(props) {
    return ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimationControls)(props.animate) ||
        _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__.variantProps.some((name) => (0,_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__.isVariantLabel)(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVariantLabel: () => (/* binding */ isVariantLabel)
/* harmony export */ });
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateMotionValuesFromProps: () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");




function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (true) {
                (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(nextValue.version === "11.11.16", `Attempting to mix Motion versions ${nextValue.version} with 11.11.16 may not work as expected.`);
            }
        }
        else if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(nextValue, { owner: element }));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) {
                    existingValue.jump(nextValue);
                }
                else if (!existingValue.hasAnimated) {
                    existingValue.set(nextValue);
                }
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariant: () => (/* binding */ resolveVariant)
/* harmony export */ });
/* harmony import */ var _resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs");


function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0,_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariantFromProps: () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/setters.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTarget: () => (/* binding */ setTarget)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-dynamic-variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");




/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = (0,_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   variantPriorityOrder: () => (/* binding */ variantPriorityOrder),
/* harmony export */   variantProps: () => (/* binding */ variantProps)
/* harmony export */ });
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionGlobalConfig: () => (/* binding */ MotionGlobalConfig)
/* harmony export */ });
const MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/array.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/array.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUniqueItem: () => (/* binding */ addUniqueItem),
/* harmony export */   moveItem: () => (/* binding */ moveItem),
/* harmony export */   removeItem: () => (/* binding */ removeItem)
/* harmony export */ });
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/clamp.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/clamp.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (min, max, v) => {
    if (v > max)
        return max;
    if (v < min)
        return min;
    return v;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/delay.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/delay.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delay: () => (/* binding */ delay),
/* harmony export */   delayInSeconds: () => (/* binding */ delayInSeconds)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frameloop/sync-time.mjs */ "./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");




/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
    const start = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
    const checkElapsed = ({ timestamp }) => {
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.cancelFrame)(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.read(checkElapsed, true);
    return () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.cancelFrame)(checkElapsed);
}
function delayInSeconds(callback, timeout) {
    return delay(callback, (0,_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(timeout));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/distance.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/distance.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   distance2D: () => (/* binding */ distance2D)
/* harmony export */ });
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/errors.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/errors.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   warning: () => (/* binding */ warning)
/* harmony export */ });
/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");


let warning = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
let invariant = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
if (true) {
    warning = (check, message) => {
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message) => {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/get-context-window.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/get-context-window.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContextWindow: () => (/* binding */ getContextWindow)
/* harmony export */ });
// Fixes https://github.com/framer/motion/issues/2270
const getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hslaToRgba: () => (/* binding */ hslaToRgba)
/* harmony export */ });
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/interpolate.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolate: () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _clamp_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop.mjs */ "./node_modules/framer-motion/dist/es/utils/noop.mjs");
/* harmony import */ var _mix_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix/index.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/index.mjs");







function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || _mix_index_mjs__WEBPACK_IMPORTED_MODULE_0__.mix;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || _noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop : ease;
            mixer = (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,_errors_mjs__WEBPACK_IMPORTED_MODULE_3__.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    if (inputLength === 2 && input[0] === input[1])
        return () => output[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_4__.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator((0,_clamp_mjs__WEBPACK_IMPORTED_MODULE_5__.clamp)(input[0], input[inputLength - 1], v))
        : interpolator;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-browser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBrowser: () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof window !== "undefined";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumericalString: () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRefObject: () => (/* binding */ isRefObject)
/* harmony export */ });
function isRefObject(ref) {
    return (ref &&
        typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isZeroValueString: () => (/* binding */ isZeroValueString)
/* harmony export */ });
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/memo.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/memo.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memo: () => (/* binding */ memo)
/* harmony export */ });
function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix/color.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix/color.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixColor: () => (/* binding */ mixColor),
/* harmony export */   mixLinearColor: () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hsla-to-rgba.mjs */ "./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs");
/* harmony import */ var _value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/color/hex.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/types/color/rgba.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/types/color/hsla.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs");
/* harmony import */ var _immediate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./immediate.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/immediate.mjs");








// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [_value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__.hex, _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba, _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0,_errors_mjs__WEBPACK_IMPORTED_MODULE_3__.warning)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type))
        return false;
    let model = type.parse(color);
    if (type === _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla) {
        // TODO Remove this cast - needed since Motion's stricter typing
        model = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
        return (0,_immediate_mjs__WEBPACK_IMPORTED_MODULE_5__.mixImmediate)(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0,_number_mjs__WEBPACK_IMPORTED_MODULE_6__.mixNumber)(fromRGBA.alpha, toRGBA.alpha, v);
        return _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix/complex.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix/complex.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMixer: () => (/* binding */ getMixer),
/* harmony export */   mixArray: () => (/* binding */ mixArray),
/* harmony export */   mixComplex: () => (/* binding */ mixComplex),
/* harmony export */   mixObject: () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _color_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/color.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipe.mjs */ "./node_modules/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/types/color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _visibility_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visibility.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/visibility.mjs");
/* harmony import */ var _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./immediate.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/immediate.mjs");










function mixNumber(a, b) {
    return (p) => (0,_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") {
        return mixNumber;
    }
    else if (typeof a === "string") {
        return (0,_render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableToken)(a)
            ? _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate
            : _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.test(a)
                ? _color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor
                : mixComplex;
    }
    else if (Array.isArray(a)) {
        return mixArray;
    }
    else if (typeof a === "object") {
        return _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.test(a) ? _color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor : mixObject;
    }
    return _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate;
}
function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](p);
        }
        return output;
    };
}
function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
        if (a[key] !== undefined && b[key] !== undefined) {
            blendValue[key] = getMixer(a[key])(a[key], b[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
}
function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target) => {
    const template = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.complex.createTransformer(target);
    const originStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.analyseComplexValue)(origin);
    const targetStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.analyseComplexValue)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length &&
        originStats.indexes.color.length === targetStats.indexes.color.length &&
        originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.invisibleValues.has(origin) &&
            !targetStats.values.length) ||
            (_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.invisibleValues.has(target) &&
                !originStats.values.length)) {
            return (0,_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.mixVisibility)(origin, target);
        }
        return (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__.pipe)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    }
    else {
        (0,_errors_mjs__WEBPACK_IMPORTED_MODULE_8__.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (0,_immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate)(origin, target);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix/immediate.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix/immediate.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixImmediate: () => (/* binding */ mixImmediate)
/* harmony export */ });
function mixImmediate(a, b) {
    return (p) => (p > 0 ? b : a);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix/index.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix/index.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mix: () => (/* binding */ mix)
/* harmony export */ });
/* harmony import */ var _complex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/complex.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");



function mix(from, to, p) {
    if (typeof from === "number" &&
        typeof to === "number" &&
        typeof p === "number") {
        return (0,_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(from, to, p);
    }
    const mixer = (0,_complex_mjs__WEBPACK_IMPORTED_MODULE_1__.getMixer)(from);
    return mixer(from, to);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix/number.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixNumber: () => (/* binding */ mixNumber)
/* harmony export */ });
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mixNumber = (from, to, progress) => {
    return from + (to - from) * progress;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/mix/visibility.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/mix/visibility.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invisibleValues: () => (/* binding */ invisibleValues),
/* harmony export */   mixVisibility: () => (/* binding */ mixVisibility)
/* harmony export */ });
const invisibleValues = new Set(["none", "hidden"]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */
function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
        return (p) => (p <= 0 ? origin : target);
    }
    else {
        return (p) => (p >= 1 ? target : origin);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/noop.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/noop.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
const noop = (any) => any;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/offsets/default.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/offsets/default.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOffset: () => (/* binding */ defaultOffset)
/* harmony export */ });
/* harmony import */ var _fill_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill.mjs */ "./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs");


function defaultOffset(arr) {
    const offset = [0];
    (0,_fill_mjs__WEBPACK_IMPORTED_MODULE_0__.fillOffset)(offset, arr.length - 1);
    return offset;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillOffset: () => (/* binding */ fillOffset)
/* harmony export */ });
/* harmony import */ var _mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mix/number.mjs */ "./node_modules/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../progress.mjs */ "./node_modules/framer-motion/dist/es/utils/progress.mjs");



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, remaining, i);
        offset.push((0,_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(min, 1, offsetProgress));
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/offsets/time.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/offsets/time.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertOffsetToTimes: () => (/* binding */ convertOffsetToTimes)
/* harmony export */ });
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/pipe.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/pipe.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe)
/* harmony export */ });
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/progress.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/progress.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   progress: () => (/* binding */ progress)
/* harmony export */ });
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPrefersReducedMotion: () => (/* binding */ initPrefersReducedMotion)
/* harmony export */ });
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");



function initPrefersReducedMotion() {
    _state_mjs__WEBPACK_IMPORTED_MODULE_0__.hasReducedMotionListener.current = true;
    if (!_is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (_state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        _state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = false;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasReducedMotionListener: () => (/* binding */ hasReducedMotionListener),
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/resolve-value.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCustomValue: () => (/* binding */ isCustomValue),
/* harmony export */   resolveFinalValueInKeyframes: () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");


const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shallowCompare: () => (/* binding */ shallowCompare)
/* harmony export */ });
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionManager: () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return () => (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/time-conversion.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   millisecondsToSeconds: () => (/* binding */ millisecondsToSeconds),
/* harmony export */   secondsToMilliseconds: () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = (seconds) => seconds * 1000;
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/transform.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/transform.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transform: () => (/* binding */ transform)
/* harmony export */ });
/* harmony import */ var _interpolate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolate.mjs */ "./node_modules/framer-motion/dist/es/utils/interpolate.mjs");


const isCustomValueType = (v) => {
    return v && typeof v === "object" && v.mix;
};
const getMixer = (v) => (isCustomValueType(v) ? v.mix : undefined);
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0,_interpolate_mjs__WEBPACK_IMPORTED_MODULE_0__.interpolate)(inputRange, outputRange, {
        mixer: getMixer(outputRange[0]),
        ...options,
    });
    return useImmediate ? interpolator(inputValue) : interpolator;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-constant.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useConstant: () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instantAnimationState: () => (/* binding */ instantAnimationState)
/* harmony export */ });
const instantAnimationState = {
    current: false,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");



const useIsomorphicLayoutEffect = _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMotionValueEvent: () => (/* binding */ useMotionValueEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function useMotionValueEvent(value, event, callback) {
    /**
     * useInsertionEffect will create subscriptions before any other
     * effects will run. Effects run upwards through the tree so it
     * can be that binding a useLayoutEffect higher up the tree can
     * miss changes from lower down the tree.
     */
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => value.on(event, callback), [value, event, callback]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   velocityPerSecond: () => (/* binding */ velocityPerSecond)
/* harmony export */ });
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/warn-once.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnOnce: () => (/* binding */ warnOnce)
/* harmony export */ });
const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionValue: () => (/* binding */ MotionValue),
/* harmony export */   collectMotionValues: () => (/* binding */ collectMotionValues),
/* harmony export */   motionValue: () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/velocity-per-second.mjs */ "./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frameloop/sync-time.mjs */ "./node_modules/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");






/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined,
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "11.11.16";
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */
            if (this.updatedAt !== currentTime) {
                this.setPrevFrameValue();
            }
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev && this.events.change) {
                this.events.change.notify(this.current);
            }
            // Update render subscribers
            if (render && this.events.renderRequest) {
                this.events.renderRequest.notify(this.current);
            }
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        if (this.canTrackVelocity === null && current !== undefined) {
            this.canTrackVelocity = isFloat(this.current);
        }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        }
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__.SubscriptionManager();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        if (collectMotionValues.current) {
            collectMotionValues.current.push(this);
        }
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        if (!this.canTrackVelocity ||
            this.prevFrameValue === undefined ||
            currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
            return 0;
        }
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_4__.velocityPerSecond)(parseFloat(this.current) -
            parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/hex.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/hex.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hex: () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs");



function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("#"),
    parse: parseHex,
    transform: _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hsla: () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs");





const hsla = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("hsl", "hue"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ", " +
            (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ")");
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/index.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs");
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs");




const color = {
    test: (v) => _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v),
    parse: (v) => {
        if (_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: (v) => {
        return typeof v === "string"
            ? v
            : v.hasOwnProperty("red")
                ? _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbUnit: () => (/* binding */ rgbUnit),
/* harmony export */   rgba: () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs");





const clampRgbUnit = (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255, v);
const rgbUnit = {
    ..._numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.isColorString)("rgb", "red"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha.transform(alpha$1)) +
        ")",
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/color/utils.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/color/utils.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isColorString: () => (/* binding */ isColorString),
/* harmony export */   splitColor: () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs");
/* harmony import */ var _utils_is_nullish_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-nullish.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs");
/* harmony import */ var _utils_single_color_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/single-color-regex.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs");




/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((typeof v === "string" &&
        _utils_single_color_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) &&
        v.startsWith(type)) ||
        (testProp &&
            !(0,_utils_is_nullish_mjs__WEBPACK_IMPORTED_MODULE_1__.isNullish)(v) &&
            Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
        return v;
    const [a, b, c, alpha] = v.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_2__.floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs");



/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ..._index_mjs__WEBPACK_IMPORTED_MODULE_1__.complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/complex/index.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/complex/index.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyseComplexValue: () => (/* binding */ analyseComplexValue),
/* harmony export */   complex: () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _color_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color/index.mjs */ "./node_modules/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _utils_color_regex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color-regex.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs");
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs");





function test(v) {
    var _a, _b;
    return (isNaN(v) &&
        typeof v === "string" &&
        (((_a = v.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) +
            (((_b = v.match(_utils_color_regex_mjs__WEBPACK_IMPORTED_MODULE_1__.colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) >
            0);
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: [],
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
        if (_color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push(_color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.parse(parsedValue));
        }
        else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        }
        else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v) => {
        let output = "";
        for (let i = 0; i < numSections; i++) {
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) {
                    output += (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__.sanitize)(v[i]);
                }
                else if (type === COLOR_TOKEN) {
                    output += _color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.transform(v[i]);
                }
                else {
                    output += v[i];
                }
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alpha: () => (/* binding */ alpha),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   scale: () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/framer-motion/dist/es/utils/clamp.mjs");


const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   degrees: () => (/* binding */ degrees),
/* harmony export */   percent: () => (/* binding */ percent),
/* harmony export */   progressPercentage: () => (/* binding */ progressPercentage),
/* harmony export */   px: () => (/* binding */ px),
/* harmony export */   vh: () => (/* binding */ vh),
/* harmony export */   vw: () => (/* binding */ vw)
/* harmony export */ });
const createUnitType = (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorRegex: () => (/* binding */ colorRegex)
/* harmony export */ });
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   floatRegex: () => (/* binding */ floatRegex)
/* harmony export */ });
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNullish: () => (/* binding */ isNullish)
/* harmony export */ });
function isNullish(v) {
    return v == null;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitize: () => (/* binding */ sanitize)
/* harmony export */ });
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   singleColorRegex: () => (/* binding */ singleColorRegex)
/* harmony export */ });
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-combine-values.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-combine-values.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCombineMotionValues: () => (/* binding */ useCombineMotionValues)
/* harmony export */ });
/* harmony import */ var _use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/use-motion-value.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/framer-motion/dist/es/frameloop/frame.mjs");




function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    const value = (0,_use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.useMotionValue)(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    const updateValue = () => value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(() => {
        const scheduleUpdate = () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.preRender(updateValue, false, true);
        const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
        return () => {
            subscriptions.forEach((unsubscribe) => unsubscribe());
            (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(updateValue);
        };
    });
    return value;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-computed.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-computed.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComputed: () => (/* binding */ useComputed)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-combine-values.mjs */ "./node_modules/framer-motion/dist/es/value/use-combine-values.mjs");



function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */
    _index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current = [];
    compute();
    const value = (0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__.useCombineMotionValues)(_index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */
    _index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current = undefined;
    return value;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-motion-value.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMotionValue: () => (/* binding */ useMotionValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");





/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    const value = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.useConstant)(() => (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.MotionConfigContext);
    if (isStatic) {
        const [, setLatest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-scroll.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-scroll.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScroll: () => (/* binding */ useScroll)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/errors.mjs */ "./node_modules/framer-motion/dist/es/utils/errors.mjs");
/* harmony import */ var _render_dom_scroll_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/dom/scroll/index.mjs */ "./node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");







function refWarning(name, ref) {
    (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.warning)(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const createScrollMotionValues = () => ({
    scrollX: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
    scrollY: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
    scrollXProgress: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
    scrollYProgress: (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(0),
});
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
    const values = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__.useConstant)(createScrollMotionValues);
    const useLifecycleEffect = layoutEffect
        ? _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect
        : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
    useLifecycleEffect(() => {
        refWarning("target", target);
        refWarning("container", container);
        return (0,_render_dom_scroll_index_mjs__WEBPACK_IMPORTED_MODULE_5__.scroll)((_progress, { x, y }) => {
            values.scrollX.set(x.current);
            values.scrollXProgress.set(x.progress);
            values.scrollY.set(y.current);
            values.scrollYProgress.set(y.progress);
        }, {
            ...options,
            container: (container === null || container === void 0 ? void 0 : container.current) || undefined,
            target: (target === null || target === void 0 ? void 0 : target.current) || undefined,
        });
    }, [container, target, JSON.stringify(options.offset)]);
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-transform.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-transform.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTransform: () => (/* binding */ useTransform)
/* harmony export */ });
/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/transform.mjs */ "./node_modules/framer-motion/dist/es/utils/transform.mjs");
/* harmony import */ var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-combine-values.mjs */ "./node_modules/framer-motion/dist/es/value/use-combine-values.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _use_computed_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-computed.mjs */ "./node_modules/framer-motion/dist/es/value/use-computed.mjs");





function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    if (typeof input === "function") {
        return (0,_use_computed_mjs__WEBPACK_IMPORTED_MODULE_0__.useComputed)(input);
    }
    const transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : (0,_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transform)(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
    const latest = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__.useConstant)(() => []);
    return (0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_3__.useCombineMotionValues)(values, () => {
        latest.length = 0;
        const numValues = values.length;
        for (let i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addValueToWillChange: () => (/* binding */ addValueToWillChange)
/* harmony export */ });
/* harmony import */ var _is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.mjs */ "./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs");


function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */
    if ((0,_is_mjs__WEBPACK_IMPORTED_MODULE_0__.isWillChangeMotionValue)(willChange)) {
        return willChange.add(key);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWillChangeMotionValue: () => (/* binding */ isWillChangeMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");


function isWillChangeMotionValue(value) {
    return Boolean((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) && value.add);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMotionValue: () => (/* binding */ isMotionValue)
/* harmony export */ });
const isMotionValue = (value) => Boolean(value && value.getVelocity);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveMotionValue: () => (/* binding */ resolveMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    const unwrappedValue = (0,_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value.get() : value;
    return (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isCustomValue)(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






// Check if DOM Element is created

let domNode = document.getElementById('hp-framer-svg');
let root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(domNode);

// LandingPage
const LandingPage = () => {
  // Set the current image to the index
  const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  // Ref to container
  const scrollCupContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Initiate scroll progress
  const {
    scrollYProgress: scrollYProgressTarget
  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({
    target: scrollCupContainer,
    offset: ['start start', 'end end']
  });
  // get viewport height
  const windowHeight = window.innerHeight;
  // Move image linear to scroll (1 viewport height)
  let scrollCupScroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgressTarget, [0, 1], [0, windowHeight]);
  let scrollCupScrollTest = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgressTarget, [0, 1], [0, windowHeight + 100]);

  // Calculate frame slots (when each image should show between scroll Y Progression)
  const frameSlots = [];
  for (let i = 0; i <= 28; i++) {
    const frameSlot = i * (1 / 28);
    frameSlots.push(frameSlot);
  }
  const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useMotionValueEvent)(scrollYProgressTarget, 'change', latest => {
    frameSlots.map((frame, index) => {
      if (frame <= latest) {
        setCurrentImage(index);
      }
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "scroll--cup",
    ref: scrollCupContainer,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "scroll--cup__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "scroll--cup__item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          className: "scroll--cup__img--container",
          style: {
            y: scrollCupScroll
          },
          children: [...Array(29)].map((e, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            className: `scroll--cup__img ${currentImage === i ? 'active' : ''}`,
            src: `/wp-content/plugins/hp-framer-svg/src/cup-images/cup${i}.png`
          }))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
        style: {
          y: scrollCupScrollTest
        },
        className: "scroll--cup__content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          children: "Each piece is thoughtfully handcrafted by me in my workshop"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          children: "Each piece is thoughtfully handcrafted by me in"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          children: "Each piece is thoughtfully handcrafted by me in my workshop, nestle"
        })]
      })]
    })
  });
};
const App = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LandingPage, {})
  });
};
console.log('framer-loaded');
// Only render if DOM

root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(App, {}));
})();

/******/ })()
;
//# sourceMappingURL=view.js.map