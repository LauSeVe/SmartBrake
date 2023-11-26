import scapy.all as scapy
import json
import binascii

def pcap_to_json(pcap_file, output_json_file):
    packets = scapy.rdpcap(pcap_file)

    json_data = []
    for packet in packets:
        payload = binascii.hexlify(packet[scapy.Raw].load).decode('utf-8')
    payload_hex = payload[4:8]

    payload_binary = bin(int(payload_hex, 16))[2:]

    payload_binary_full = (16-len(payload_binary)) * "0" + payload_binary


    idDevice_binary = payload_binary_full[:9] 
    command_binary = payload_binary_full[9:11]
    maxVel_binary = payload_binary_full[11:16]

    idDevice_decimal = int(idDevice_binary, 2)
    command_decimal = int(command_binary, 2)
    maxVel_decimal = int(maxVel_binary, 2)

    packet_data = {
        "idDevice": idDevice_decimal,
        "command": command_decimal,
        "maxVel": maxVel_decimal
    }

    json_data.append(packet_data)

    with open(output_json_file, 'w') as json_file:
        json.dump(json_data, json_file, indent=4)

if __name__ == "__main__":
    pcap_file = "mob2dev1.pcap"  # Replace with the path to your PCAP file
    output_json_file = "packets.json"  # Replace with the desired output JSON file

    pcap_to_json(pcap_file, output_json_file)
