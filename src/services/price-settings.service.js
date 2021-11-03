/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */

import {
    UPSERT_HURRY_REQUEST,
    UPSERT_REQUEST,
    UPSERT_TRIP,
    UPSERT_RECOMENDATION,
    UPSERT_AUCTION,
    UPSERT_PAYMENT,
    UPSERT_CREATE_BILL,
    UPSERT_REFUND
} from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts } from '../helpers/api';

export default {
    upsert_hurry_request,
    upsert_request,
    upsert_assist_request,
    upsert_trip,
    upsert_recomendation,
    upsert_auction,
    upsert_next_payment,
    upsert_create_bill,
    upsert_refund
};
const upsert_refund = (payment_fee_percent, payment_fee, system_fee_percent, system_fee, isPaypal) => {
    const body = {
        payment_fee_percent,
        payment_fee,
        system_fee_percent,
        system_fee,
        isPaypal
    };
    return posts(`${UPSERT_REFUND}`, body).then((response) => handleresponse(response));
};

const upsert_create_bill = (
    payment_fee_percent,
    payment_fee,
    system_fee_percent,
    system_fee,
    minimum_transaction_system_fee,
    minimum_transaction,
    points,
    isFree,
    isPaypal
) => {
    const body = {
        payment_fee_percent,
        payment_fee,
        system_fee_percent,
        system_fee,
        minimum_transaction_system_fee,
        minimum_transaction,
        points,
        isFree,
        isPaypal
    };
    return posts(`${UPSERT_CREATE_BILL}`, body).then((response) => handleresponse(response));
};

const upsert_next_payment = (
    payment_fee_percent,
    payment_fee,
    system_fee_percent,
    system_fee,
    minimum_transaction_system_fee,
    minimum_transaction,
    points,
    isPaypal
) => {
    const body = {
        payment_fee_percent,
        payment_fee,
        system_fee_percent,
        system_fee,
        minimum_transaction_system_fee,
        minimum_transaction,
        points,
        isPaypal
    };
    return posts(`${UPSERT_PAYMENT}`, body).then((response) => handleresponse(response));
};

const upsert_auction = (
    auction_posting_cost,
    payment_fee_percent,
    payment_fee,
    system_fee_percent,
    system_fee,
    minimum_transaction_system_fee,
    minimum_transaction,
    points,
    isFree,
    isPaypal
) => {
    const body = {
        auction_posting_cost,
        payment_fee_percent,
        payment_fee,
        system_fee_percent,
        system_fee,
        minimum_transaction_system_fee,
        minimum_transaction,
        points,
        isFree,
        isPaypal
    };
    return posts(`${UPSERT_AUCTION}`, body).then((response) => handleresponse(response));
};

const upsert_recomendation = (
    recomendation_posting_cost,
    payment_fee_percent,
    payment_fee,
    system_fee_percent,
    system_fee,
    minimum_transaction_system_fee,
    minimum_transaction,
    points,
    isFree,
    isPaypal
) => {
    const body = {
        recomendation_posting_cost,
        payment_fee_percent,
        payment_fee,
        system_fee_percent,
        system_fee,
        minimum_transaction_system_fee,
        minimum_transaction,
        points,
        isFree,
        isPaypal
    };
    return posts(`${UPSERT_RECOMENDATION}`, body).then((response) => handleresponse(response));
};

const upsert_hurry_request = (hurry_request_posting_cost, minimum_transaction, points, isFree, isPaypal) => {
    const body = {
        hurry_request_posting_cost,
        minimum_transaction,
        points,
        isFree,
        isPaypal
    };
    return posts(`${UPSERT_HURRY_REQUEST}`, body).then((response) => handleresponse(response));
};

const upsert_request = (hurry_request_posting_cost, minimum_transaction, points, isFree, isPaypal) => {
    const body = {
        hurry_request_posting_cost,
        minimum_transaction,
        points,
        isFree,
        isPaypal
    };
    return posts(`${UPSERT_REQUEST}`, body).then((response) => handleresponse(response));
};

const upsert_assist_request = (
    payment_fee_percent,
    payment_fee,
    system_fee_percent,
    system_fee,
    minimum_transaction_system_fee,
    minimum_transaction,
    points,
    isPaypal
) => {
    const body = {
        payment_fee_percent,
        payment_fee,
        system_fee_percent,
        system_fee,
        minimum_transaction_system_fee,
        minimum_transaction,
        points,
        isPaypal
    };
    return posts(`${UPSERT_REQUEST}`, body).then((response) => handleresponse(response));
};

const upsert_trip = (
    trip_posting_cost,
    payment_fee_percent,
    payment_fee,
    system_fee_percent,
    system_fee,
    minimum_transaction_system_fee,
    minimum_transaction,
    points,
    isFree,
    isPaypal
) => {
    const body = {
        trip_posting_cost,
        payment_fee_percent,
        payment_fee,
        system_fee_percent,
        system_fee,
        minimum_transaction_system_fee,
        minimum_transaction,
        points,
        isFree,
        isPaypal
    };
    return posts(`${UPSERT_TRIP}`, body).then((response) => handleresponse(response));
};
