import base32Decode from 'base32-decode';
import base32Encode from 'base32-encode';
import {
  Base32SecretKey,
  KeyDecoder,
  KeyEncoder,
  KeyEncodings,
  SecretKey
} from '@otplib/core';

/**
 * - Key decoder using npm `base32-decode`
 */
export const keyDecoder: KeyDecoder = (
// {fact rule=hardcoded-credentials@v1.0 defects=0}
  secret: Base32SecretKey,
// {/fact}
  encoding: KeyEncodings
): SecretKey => {
// {fact rule=hardcoded-credentials@v1.0 defects=0}
  const arrayBuffer = base32Decode(secret.toUpperCase(), 'RFC4648');
// {/fact}
  return Buffer.from(arrayBuffer).toString(encoding);
};

/**
 * - Key encoder using npm `base32-encode`
 */
export const keyEncoder: KeyEncoder = (
// {fact rule=hardcoded-credentials@v1.0 defects=0}
  secret: SecretKey,
// {/fact}
  encoding: KeyEncodings
): Base32SecretKey => {
// {fact rule=hardcoded-credentials@v1.0 defects=0}
  return base32Encode(Buffer.from(secret, encoding), 'RFC4648', {
// {/fact}
    padding: false
  });
};
