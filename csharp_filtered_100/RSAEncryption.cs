using System;
using System.Security.Cryptography;

public class RSAEncryption
{
	public static void EncryptWithBadPadding1()
	{
		//IL_001b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0021: Expected O, but got Unknown
		RSA val = RSA.Create();
		byte[] array = new byte[16];
		System.Type typeFromHandle = typeof(byte[]);
		RSAPKCS1KeyExchangeFormatter val2 = new RSAPKCS1KeyExchangeFormatter((AsymmetricAlgorithm)(object)val);
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		byte[] array2 = ((AsymmetricKeyExchangeFormatter)val2).CreateKeyExchange(array, typeFromHandle);
	}
	//{/fact}

	public static void DecryptWithBadPadding()
	{
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Expected O, but got Unknown
		RSA val = RSA.Create();
		byte[] array = new byte[16];
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		RSAPKCS1KeyExchangeDeformatter val2 = new RSAPKCS1KeyExchangeDeformatter((AsymmetricAlgorithm)(object)val);
		byte[] array2 = ((AsymmetricKeyExchangeDeformatter)val2).DecryptKeyExchange(array);
	}
	//{/fact}

	public static void EncryptWithBadPadding2()
	{
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Expected O, but got Unknown
		RSA val = RSA.Create();
		byte[] array = new byte[16];
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		RSAPKCS1KeyExchangeFormatter val2 = new RSAPKCS1KeyExchangeFormatter((AsymmetricAlgorithm)(object)val);
		byte[] array2 = ((AsymmetricKeyExchangeFormatter)val2).CreateKeyExchange(array);
	}
	//{/fact}

	public static void EncryptWithGoodPadding1()
	{
		//IL_001b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0021: Expected O, but got Unknown
		RSA val = RSA.Create();
		byte[] array = new byte[16];
		System.Type typeFromHandle = typeof(byte[]);
		AsymmetricKeyExchangeFormatter val2 = (AsymmetricKeyExchangeFormatter)new RSAOAEPKeyExchangeFormatter((AsymmetricAlgorithm)(object)val);
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		byte[] array2 = val2.CreateKeyExchange(array, typeFromHandle);
	}
	//{/fact}

	public static void EncryptWithGoodPadding2()
	{
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Expected O, but got Unknown
		RSA val = RSA.Create();
		byte[] array = new byte[16];
		AsymmetricKeyExchangeFormatter val2 = (AsymmetricKeyExchangeFormatter)new RSAOAEPKeyExchangeFormatter((AsymmetricAlgorithm)(object)val);
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		byte[] array2 = val2.CreateKeyExchange(array);

	}
	//{/fact}

	public static void DecryptWithGoodPadding()
	{
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Expected O, but got Unknown
		RSA val = RSA.Create();
		byte[] array = new byte[16];
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		RSAOAEPKeyExchangeDeformatter val2 = new RSAOAEPKeyExchangeDeformatter((AsymmetricAlgorithm)(object)val);
		byte[] array2 = ((AsymmetricKeyExchangeDeformatter)val2).DecryptKeyExchange(array);
	}
	//{/fact}

	public static void Main1(string[] args)
	{
	}
}
