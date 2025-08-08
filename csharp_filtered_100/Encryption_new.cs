using System;
using System.Security.Cryptography;

public class Encryption_new
{
	public void EncryptWithAesEcb()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		Aes key = Aes.Create();
		((SymmetricAlgorithm)key).Mode = (CipherMode)2;
		ICryptoTransform encryptor = ((SymmetricAlgorithm)key).CreateEncryptor();
		try
		{
			byte[] msg = new byte[32];
			byte[] cipherText = encryptor.TransformFinalBlock(msg, 0, msg.Length);
		}
		finally
		{
			((System.IDisposable)encryptor)?.Dispose();
		}
	}
	//{/fact}

	public void EncryptWithAesEcb2()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		Aes key = Aes.Create();
		byte[] msg = new byte[32];
		byte[] cipherText = ((SymmetricAlgorithm)key).EncryptEcb(msg, (PaddingMode)2);
	}
	//{/fact}

	public void DecryptWithAesEcb(byte[] cipherText)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		Aes key = Aes.Create();
		((SymmetricAlgorithm)key).Mode = (CipherMode)2;
		ICryptoTransform decryptor = ((SymmetricAlgorithm)key).CreateDecryptor();
		try
		{
			byte[] msg = decryptor.TransformFinalBlock(cipherText, 0, cipherText.Length);
		}
		finally
		{
			((System.IDisposable)decryptor)?.Dispose();
		}
	}
	//{/fact}

	public void DecryptWithAesEcb2(byte[] cipherText)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		Aes key = Aes.Create();
		byte[] msgText = ((SymmetricAlgorithm)key).DecryptEcb(cipherText, (PaddingMode)2);
	}
	//{/fact}

	public void EncryptWith3DESEcb()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		TripleDES key = TripleDES.Create();
		((SymmetricAlgorithm)key).Mode = (CipherMode)2;
		ICryptoTransform encryptor = ((SymmetricAlgorithm)key).CreateEncryptor();
		try
		{
			byte[] msg = new byte[32];
			byte[] cipherText = encryptor.TransformFinalBlock(msg, 0, msg.Length);
		}
		finally
		{
			((System.IDisposable)encryptor)?.Dispose();
		}
	}
	//{/fact}

	public void EncryptWith3DESEcb2()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		TripleDES key = TripleDES.Create();
		byte[] msg = new byte[32];
		byte[] cipherText = ((SymmetricAlgorithm)key).EncryptEcb(msg, (PaddingMode)2);
	}
	//{/fact}

	public void DecryptWith3DESEcb(byte[] cipherText)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		TripleDES key = TripleDES.Create();
		((SymmetricAlgorithm)key).Mode = (CipherMode)2;
		ICryptoTransform decryptor = ((SymmetricAlgorithm)key).CreateDecryptor();
		try
		{
			byte[] msg = decryptor.TransformFinalBlock(cipherText, 0, cipherText.Length);
		}
		finally
		{
			((System.IDisposable)decryptor)?.Dispose();
		}
	}
	//{/fact}

	public void DecryptWith3DESEcb2(byte[] cipherText)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		TripleDES key = TripleDES.Create();
		byte[] msgText = ((SymmetricAlgorithm)key).DecryptEcb(cipherText, (PaddingMode)2);
	}

	//{/fact}
	public void EncryptWithEcb(SymmetricAlgorithm key)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		key.Mode = (CipherMode)2;
		ICryptoTransform encryptor = key.CreateEncryptor();
		try
		{
			byte[] msg = new byte[32];
			byte[] cipherText = encryptor.TransformFinalBlock(msg, 0, msg.Length);
		}
		finally
		{
			((System.IDisposable)encryptor)?.Dispose();
		}
	}
	//{/fact}

	public void EncryptWithEcb2(SymmetricAlgorithm key)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		byte[] msg = new byte[32];
		byte[] cipherText = key.EncryptEcb(msg, (PaddingMode)2);
	}
	//{/fact}

	public void DecryptWithEcb(SymmetricAlgorithm key, byte[] cipherText)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		key.Mode = (CipherMode)2;
		ICryptoTransform decryptor = key.CreateDecryptor();
		try
		{
			byte[] msg = decryptor.TransformFinalBlock(cipherText, 0, cipherText.Length);
		}
		finally
		{
			((System.IDisposable)decryptor)?.Dispose();
		}
	}
	//{/fact}

	public void DecryptWithEcb2(SymmetricAlgorithm key, byte[] cipherText)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=1}
		byte[] msgText = key.DecryptEcb(cipherText, (PaddingMode)2);
	}
	//{/fact}

	public void EncryptWithAesCbc()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Aes key = Aes.Create();
		((SymmetricAlgorithm)key).Mode = (CipherMode)1;
		ICryptoTransform encryptor = ((SymmetricAlgorithm)key).CreateEncryptor();
		try
		{
			byte[] msg = new byte[32];
			byte[] cipherText = encryptor.TransformFinalBlock(msg, 0, msg.Length);
		}
		finally
		{
			((System.IDisposable)encryptor)?.Dispose();
		}
	}
	//{/fact}

	public void EncryptWithAesCbc2()
	{
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Aes key = Aes.Create();
		byte[] msg = new byte[32];
		byte[] iv = new byte[16];
		byte[] cipherText = ((SymmetricAlgorithm)key).EncryptCbc(msg, iv, (PaddingMode)2);
	}
	//{/fact}

	public void DecryptWithAesCbc(byte[] cipherText)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Aes key = Aes.Create();
		((SymmetricAlgorithm)key).Mode = (CipherMode)1;
		ICryptoTransform decryptor = ((SymmetricAlgorithm)key).CreateDecryptor();
		try
		{
			byte[] msg = decryptor.TransformFinalBlock(cipherText, 0, cipherText.Length);
		}
		finally
		{
			((System.IDisposable)decryptor)?.Dispose();
		}
	}
	//{/fact}

	public void DecryptWithAesCbc2(byte[] cipherText, byte[] iv)
	{
		//{fact rule=insecure-cryptography@v1.0 defects=0}
		Aes key = Aes.Create();
		byte[] msgText = ((SymmetricAlgorithm)key).DecryptCbc(cipherText, iv, (PaddingMode)2);
	}
	//{/fact}

	public static void Main1()
	{

		Console.WriteLine("Hello World");
	}
}

